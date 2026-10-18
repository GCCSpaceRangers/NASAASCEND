/* ==========================================================
   Space Rangers - NASA ASCEND GCC
   Shared site behavior. This one file controls:
     1. The navigation links (edit NAV below to add/rename a page)
     2. The header and footer shown on every page
     3. The mobile menu button
   ========================================================== */

(function () {
  'use strict';

  // ---- 1. Pages in the navigation: [page key, file, label] ----
  // The page key must match <body data-page="..."> in that page's HTML file.
  var NAV = [
    ['home', 'index.html', 'Home'],
    ['team', 'team.html', 'Our Team'],
    ['payload', 'payload.html', 'Our Payload'],
    ['progress', 'progress.html', 'Progress'],
    ['calibration', 'calibration.html', 'Calibration'],
    ['flight', 'flight.html', 'Flight'],
    ['results', 'results.html', 'Results']
  ];

  var current = document.body.getAttribute('data-page');
  var LOGO_ALT = 'Space Rangers ASCEND — Glendale Community College NASA Space Grant';

  function navLinks() {
    return NAV.map(function (p) {
      var on = p[0] === current ? ' class="on"' : '';
      return '<a data-p="' + p[0] + '" href="' + p[1] + '"' + on + '>' + p[2] + '</a>';
    }).join('');
  }

  function footerLinks() {
    return NAV.map(function (p) {
      return '<li><a href="' + p[1] + '">' + p[2] + '</a></li>';
    }).join('');
  }

  // ---- 2. Header and footer ----
  var header =
    '<header><div class="wrap">' +
    '<a aria-label="Space Rangers home" class="brand" href="index.html">' +
    '<img alt="' + LOGO_ALT + '" class="logo" src="assets/images/logo.png"></a>' +
    '<nav aria-label="Main" class="top">' + navLinks() + '</nav>' +
    '<button aria-expanded="false" aria-label="Open menu" id="burger">☰</button>' +
    '</div>' +
    '<nav aria-label="Mobile" id="mnav">' + navLinks() + '</nav></header>';

  var footer =
    '<footer><div class="wrap cols">' +
    '<div><a class="brand" href="index.html"><img alt="' + LOGO_ALT + '" class="logo" src="assets/images/logo.png"></a>' +
    '<p style="margin-top:1rem;max-width:20rem">A NASA ASCEND student engineering team at Glendale Community College, ' +
    'designing and building a scientific payload for high-altitude flight.</p></div>' +
    '<div><h4>Navigation</h4><ul>' + footerLinks() + '</ul></div>' +
    '<div><h4>Program</h4><p class="w">NASA ASCEND</p>' +
    '<p style="margin-bottom:.75rem">Advancing Collaborative Connections for Earth, Space, and the Next Generation of Dreamers</p>' +
    '<p class="w">Glendale Community College</p><p>Glendale, Arizona</p></div></div>' +
    '<div class="wrap legal"><span>© 2026 Space Rangers — GCC NASA ASCEND Team</span><span>From Design to Flight</span></div></footer>';

  document.getElementById('site-header').outerHTML = header;
  document.getElementById('site-footer').outerHTML = footer;

  // ---- 3. Mobile menu button ----
  document.getElementById('burger').onclick = function () {
    var menu = document.getElementById('mnav');
    var open = menu.classList.toggle('open');
    this.setAttribute('aria-expanded', open);
  };
})();
