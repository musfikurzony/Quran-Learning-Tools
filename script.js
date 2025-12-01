// Select all word elements
const wordElements = document.querySelectorAll('.word');

// Popup elements
const popupOverlay = document.getElementById('popup-overlay');
const popupArabic = document.getElementById('popup-arabic');
const popupRoot = document.getElementById('popup-root');
const popupGrammar = document.getElementById('popup-grammar');
const popupBn = document.getElementById('popup-bn');
const popupCloseBtn = document.getElementById('popup-close');

// Function to open popup with given word data
function openPopup(wordEl) {
  const arabic = wordEl.dataset.arabic || '';
  const root = wordEl.dataset.root || '';
  const grammar = wordEl.dataset.grammar || '';
  const bn = wordEl.dataset.bn || '';

  popupArabic.textContent = arabic;
  popupRoot.textContent = root;
  popupGrammar.textContent = grammar;
  popupBn.textContent = bn;

  popupOverlay.classList.remove('hidden');
}

// Function to close popup
function closePopup() {
  popupOverlay.classList.add('hidden');
}

// Attach click listeners to each word
wordElements.forEach((wordEl) => {
  wordEl.addEventListener('click', () => openPopup(wordEl));
});

// Close button handler
popupCloseBtn.addEventListener('click', closePopup);

// Click outside the popup-card closes overlay
popupOverlay.addEventListener('click', (event) => {
  // if click is directly on overlay (not inside card)
  if (event.target === popupOverlay) {
    closePopup();
  }
});

// (Optional) Escape key to close popup on desktop
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePopup();
  }
});
