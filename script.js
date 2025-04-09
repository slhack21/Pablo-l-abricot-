
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const sideMenu = document.getElementById("side-menu");
  const loginLink = document.getElementById("login-link");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sideMenu.classList.add("active");
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      sideMenu.classList.remove("active");
    });
  }

  if (loginLink) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        loginLink.textContent = "Déconnexion";
        loginLink.href = "#";
        loginLink.onclick = () => firebase.auth().signOut().then(() => location.reload());
      } else {
        loginLink.textContent = "Connexion";
        loginLink.href = "login.html";
      }
    });
  }
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
