document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieOkBtn = document.getElementById('cookie-ok-btn');
  const storageCookieKey = 'cookieBannerClosed';
  const wasBannerClosed = localStorage.getItem(storageCookieKey) === 'true';

  cookieBanner.style.display = wasBannerClosed ? 'none' : 'block';

  cookieOkBtn.addEventListener('click', () => {
    localStorage.setItem(storageCookieKey, 'true');
    cookieBanner.style.display = 'none';
  });
});
