// Login sederhana
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      if (user === "erusan" && pass === "fathirganteng") {
        window.location.href = "home.html";
      } else {
        alert("Username atau password salah!");
      }
    });
  }
});

// Pencarian buku
function searchBooks() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const books = document.querySelectorAll(".book-card");
  books.forEach(book => {
    const title = book.querySelector("h3").textContent.toLowerCase();
    book.style.display = title.includes(searchValue) ? "block" : "none";
  });
}
