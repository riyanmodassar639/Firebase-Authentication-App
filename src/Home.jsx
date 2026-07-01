// src/Home.jsx
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useNotes } from "./useNotes";
import { useOnlineStatus } from "./useOnlineStatus";

export default function Home() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { notes, loading, addNote, updateNote, deleteNote } = useNotes(currentUser?.uid);
  const isOnline = useOnlineStatus();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const touchStartY = useRef(null);
  const listRef = useRef(null);
  const titleInputRef = useRef(null);

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  async function handleAdd(e) {
    e.preventDefault();
    if (!title.trim()) return;
    const t = title.trim();
    const b = body.trim();
    setTitle("");
    setBody("");
    titleInputRef.current?.focus();
    await addNote(t, b);
  }

  function startEdit(note) {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditBody(note.body || "");
  }

  async function saveEdit(id) {
    setEditingId(null);
    await updateNote(id, { title: editTitle, body: editBody });
  }

  function handleTouchStart(e) {
    if (listRef.current?.scrollTop === 0) {
      touchStartY.current = e.touches[0].clientY;
    }
  }

  function handleTouchEnd(e) {
    if (touchStartY.current === null) return;
    const delta = e.changedTouches[0].clientY - touchStartY.current;
    touchStartY.current = null;
    if (delta > 80) {
      setRefreshing(true);
      setTimeout(() => setRefreshing(false), 800);
    }
  }

  return (
    <div className="home-wrapper">
      {!isOnline && (
        <div className="offline-banner">
          ⚠️ You're offline — changes will sync when you reconnect.
        </div>
      )}

      <div className="home-card wide">
        <div className="home-header">
          <h1>Your Notes</h1>
          <div className="home-meta">
            <span className="user-email">{currentUser?.email}</span>
            <span className={`status-dot ${isOnline ? "online" : "offline"}`} title={isOnline ? "Online" : "Offline"} />
            <button className="logout-button small" onClick={handleLogout}>Log out</button>
          </div>
        </div>

        <form onSubmit={handleAdd} className="note-form">
          <input
            ref={titleInputRef}
            className="note-input"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="note-textarea"
            placeholder="Note body (optional)"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={2}
          />
          <button type="submit" className="note-add-btn">+ Add note</button>
        </form>

        <div
          ref={listRef}
          className="notes-list"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {refreshing && <div className="ptr-indicator">↻ Refreshing…</div>}

          {loading ? (
            <div className="notes-placeholder">Loading notes…</div>
          ) : notes.length === 0 ? (
            <div className="notes-placeholder">No notes yet — start writing!</div>
          ) : (
            notes.map((note) =>
              editingId === note.id ? (
                <div key={note.id} className="note-card editing">
                  <input
                    className="note-input"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <textarea
                    className="note-textarea"
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    rows={3}
                  />
                  <div className="note-actions">
                    <button className="btn-save" onClick={() => saveEdit(note.id)}>Save</button>
                    <button className="btn-cancel" onClick={() => setEditingId(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div key={note.id} className="note-card">
                  <div className="note-content">
                    <h3 className="note-title">{note.title}</h3>
                    {note.body && <p className="note-body">{note.body}</p>}
                    <span className="note-date">
                      {note.createdAt?.toDate().toLocaleDateString("en-US", {
                        month: "short", day: "numeric", year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="note-actions">
                    <button className="btn-edit" onClick={() => startEdit(note)}>Edit</button>
                    <button className="btn-delete" onClick={() => deleteNote(note.id)}>Delete</button>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}