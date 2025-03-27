const titles = document.querySelectorAll('.second-banner-title, .second-banner-subtitle');

titles.forEach(title => {
  const originalText = title.innerText;
  const encryptedText = '#'.repeat(originalText.length);
  
  const encryptedSpan = document.createElement('span');
  encryptedSpan.classList.add('encrypted-text');
  encryptedSpan.innerText = encryptedText;

  title.innerHTML = '';
  title.appendChild(encryptedSpan);
  title.appendChild(document.createTextNode(originalText));

  title.addEventListener('mouseenter', () => {
    title.classList.add('hidden-text');
    encryptedSpan.style.display = 'inline'; // Show encrypted text
  });

  title.addEventListener('mouseleave', () => {
    title.classList.remove('hidden-text');
    encryptedSpan.style.display = 'none'; // Hide encrypted text
  });
});