// Jotbit website: download buttons and device detection.
// No cookies, no tracking, no external requests.

// Download targets. When a platform goes live, set available: true and fill in url.
//   mac:     GitHub release asset named Jotbit.dmg (jotbit-mac/scripts/package_dmg.sh)
//   android: https://play.google.com/store/apps/details?id=<application id>
//   ios:     https://apps.apple.com/app/id<numeric app id>
const DOWNLOADS = {
  mac: {
    available: true,
    url: 'https://github.com/Jotbit-Labs/jotbit-mac/releases/latest/download/Jotbit.dmg',
    label: 'Download',
  },
  windows: { available: false, url: '', label: 'Download for Windows' },
  android: { available: false, url: '', label: 'Get it on Google Play' },
  ios: { available: false, url: '', label: 'Download on the App Store' },
};

/** Best guess of the visitor's platform, or null. */
function detectPlatform() {
  const ua = navigator.userAgent || '';
  // iPadOS reports itself as a Mac; touch support gives it away.
  const isIPad = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  if (/iPhone|iPad|iPod/.test(ua) || isIPad) return 'ios';
  if (/Android/.test(ua)) return 'android';
  if (/Windows/.test(ua)) return 'windows';
  if (/Macintosh|Mac OS X/.test(ua)) return 'mac';
  return null;
}

function setUpDownloads() {
  const detected = detectPlatform();

  for (const card of document.querySelectorAll('.dl-card')) {
    const platform = card.dataset.platform;
    const target = DOWNLOADS[platform];
    const button = card.querySelector('[data-download]');
    if (!target || !button) continue;

    if (target.available && target.url) {
      button.href = target.url;
      button.textContent = target.label;
      button.removeAttribute('aria-disabled');
      button.classList.add('btn-primary');
      // Store links open in a new tab; direct downloads stay on the page.
      if (platform === 'android' || platform === 'ios') {
        button.target = '_blank';
        button.rel = 'noopener';
      }
    }

    if (platform === detected) {
      card.classList.add('is-recommended');
      const hint = card.querySelector('.dl-hint');
      if (hint) hint.hidden = false;
    }
  }
}

setUpDownloads();
