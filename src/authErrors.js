// src/utils/authErrors.js
export function getAuthErrorMessage(error) {
  const code = error?.code || "";

  switch (code) {
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "That password doesn't match this email. Try again or reset your password.";
    case "auth/user-not-found":
      return "No account found with that email. Check the address or sign up instead.";
    case "auth/email-already-in-use":
      return "An account with that email already exists. Try logging in instead.";
    case "auth/weak-password":
      return "That password is too weak. Use at least 6 characters.";
    case "auth/invalid-email":
      return "That email address doesn't look right. Double-check and try again.";
    case "auth/too-many-requests":
      return "Too many attempts. Wait a moment before trying again.";
    case "auth/missing-password":
      return "Enter a password to continue.";
    default:
      return "Something went wrong. Please try again.";
  }
}
