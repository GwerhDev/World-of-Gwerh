
export function LoginFunction() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  
  if (username === "admin" && password === "admin") {
    return true;
  } else {
    alert("Invalid credentials");
    return false;
  }
}