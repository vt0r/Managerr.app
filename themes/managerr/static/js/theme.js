(function () {

  /* ---- THEME TOGGLE ---- */
  var KEY = 'managerr-theme';

  function effective() {
    return document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function updateToggleLabel(current) {
    var btn = document.getElementById('themeToggle');
    if (btn) btn.setAttribute('aria-label', current === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  window.toggleTheme = function () {
    var next = effective() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(KEY, next);
    updateToggleLabel(next);
  };

  document.addEventListener('DOMContentLoaded', function () {
    updateToggleLabel(effective());
  });

  /* ---- DRAWER ---- */
  var body    = document.body;
  var openBtn = document.getElementById('menuOpen');
  var closeBtn= document.getElementById('drawerCloseBtn');
  var overlay = document.getElementById('drawerOverlay');
  var drawer  = document.getElementById('drawer');

  function openDrawer() {
    body.classList.add('nav-open');
    body.style.overflow = 'hidden';
    if (drawer)  { drawer.removeAttribute('inert'); drawer.setAttribute('aria-hidden', 'false'); }
    if (openBtn) { openBtn.setAttribute('aria-expanded', 'true'); }
    if (closeBtn){ closeBtn.focus(); }
  }

  function closeDrawer() {
    body.classList.remove('nav-open');
    body.style.overflow = '';
    if (drawer)  { drawer.setAttribute('inert', ''); drawer.setAttribute('aria-hidden', 'true'); }
    if (openBtn) { openBtn.setAttribute('aria-expanded', 'false'); openBtn.focus(); }
  }

  if (openBtn)  openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay)  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('nav-open')) closeDrawer();
  });

  // Close on same-page anchor links (Features, Screenshots)
  if (drawer) {
    drawer.querySelectorAll('a[href^="/#"]').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
  }

}());
