document.addEventListener("DOMContentLoaded", () => {

  // ✅ TYPING EFFECT
  const text = "Mary O'Donnell";
  const typingElement = document.getElementById("typing");

  let i = 0;

  function type() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }

  type();

  // ✅ FADE-IN SCROLL
const elements = document.querySelectorAll(".fade-in");

function reveal() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
}

// ✅ run immediately on load
reveal();

window.addEventListener("scroll", reveal);

  window.addEventListener("scroll", reveal);
  reveal();

  // ✅ THEME TOGGLE
  const toggle = document.getElementById("themeToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light");

      toggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
    });
  }

});