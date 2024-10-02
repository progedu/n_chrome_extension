'use strict';

const urls = [
  'https://www.nnn.ed.nico/contents/guides/7427',
  'https://www.nnn.ed.nico/contents/guides/7428',
  'https://www.nnn.ed.nico/contents/guides/7429',
  'https://www.nnn.ed.nico/contents/guides/7430',
  'https://www.nnn.ed.nico/contents/guides/7431',
  'https://www.nnn.ed.nico/contents/guides/7432',
  'https://www.nnn.ed.nico/contents/guides/7433',
  'https://www.nnn.ed.nico/contents/guides/7434',
  'https://www.nnn.ed.nico/contents/guides/7435',
  'https://www.nnn.ed.nico/contents/guides/7436',
];

let escapePressCount = 0;

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    escapePressCount++;

    if (escapePressCount === 2) {
      location.href = urls[Math.floor(Math.random() * urls.length)];
      escapePressCount = 0;
    }

    setTimeout(() => (escapePressCount = 0), 500);
  }
});
