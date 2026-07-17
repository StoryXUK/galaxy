const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('demo-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = 'Please complete the required fields.';
    return;
  }
  status.textContent = 'Thanks — your demo request is ready to be connected to your form handler.';
  form.reset();
});
