document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('.nav-menu');
  if (!toggle || !navMenu) return;
  toggle.addEventListener('click', function () {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
    navMenu.setAttribute('aria-hidden', String(expanded));
  });
});
