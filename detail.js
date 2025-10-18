const params = new URLSearchParams(window.location.search);

const judul = decodeURIComponent(params.get("judul"));
const img = decodeURIComponent(params.get("img"));
const ringkasan = decodeURIComponent(params.get("ringkasan"));
const penulis = decodeURIComponent(params.get("penulis"));

document.getElementById("bookTitle").textContent = judul || "Judul tidak ditemukan";
document.getElementById("bookImage").src = img || "";
document.getElementById("bookAuthor").textContent = penulis ? `Oleh ${penulis}` : "";
document.getElementById("bookSummary").textContent = ringkasan || "Ringkasan tidak tersedia.";
