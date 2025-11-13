document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      // Якщо відкрито — закриваємо
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
      } else {
        // Закриваємо всі інші
        document.querySelectorAll(".accordion-content").forEach(c => {
          c.style.maxHeight = null;
          c.style.paddingTop = "0";
          c.style.paddingBottom = "0";
        });

        // Відкриваємо цей
        content.style.maxHeight = content.scrollHeight + 80 + "px";
        content.style.padding = "20px";
        content.style.paddingLeft = "40px";
      }
    });
  });
});

const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Завантаження теми з localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  body.classList.toggle('dark-theme');
  localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

