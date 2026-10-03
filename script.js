const clock = document.getElementById('clock');

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  clock.textContent = time;
}

updateClock();
setInterval(updateClock, 1000);

const previewWraps = document.querySelectorAll('.preview-wrap');

previewWraps.forEach((wrap) => {
  const iframe = wrap.querySelector('iframe');
  if (!iframe) return;

  iframe.addEventListener('load', () => {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc || !doc.body || doc.body.innerText.trim() === '') {
        wrap.classList.add('has-fallback');
      }
    } catch (error) {
      wrap.classList.add('has-fallback');
    }
  });

  iframe.src = iframe.dataset.src;
});
