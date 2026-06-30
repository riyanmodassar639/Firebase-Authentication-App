// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Home() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <div className="home-card">
      <h1>Your Notes</h1>
      <p className="home-subtitle">
        Logged in as <strong>{currentUser?.email}</strong>
      </p>

      {/* Your existing notes list / editor goes here */}
      <div className="notes-placeholder">No notes yet — start writing!</div>

      <button className="logout-button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
