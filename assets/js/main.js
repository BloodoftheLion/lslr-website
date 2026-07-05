// Scroll reveal
(function () {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    });
  }
})();

// Contact form -> mailto (no backend yet; opens the user's email client pre-filled)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('interest-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#f-name').value.trim();
    const age = form.querySelector('#f-age').value.trim();
    const position = form.querySelector('#f-position').value.trim();
    const email = form.querySelector('#f-email').value.trim();
    const message = form.querySelector('#f-message').value.trim();

    const subject = encodeURIComponent(`Interest in LSLR — ${name || 'New Family'}`);
    const bodyLines = [
      `Name: ${name}`,
      `Player age: ${age}`,
      `Primary position: ${position}`,
      `Email: ${email}`,
      '',
      'Message:',
      message
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:lonestarlockerroom@gmail.com?subject=${subject}&body=${body}`;
  });
});
