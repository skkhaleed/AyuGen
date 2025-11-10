document.addEventListener('DOMContentLoaded', () => {
  // Post button
  document.querySelectorAll('.post-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const textarea = btn.previousElementSibling;
      const text = textarea.value.trim();
      if (text) {
        alert('✅ Post published!');
        textarea.value = '';
      }
    });
  });

  // Like/Comment/Share buttons
  document.querySelectorAll('.post-actions button').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Action recorded! 🌿');
    });
  });

  // Follow buttons
  document.querySelectorAll('.follow-user button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = '✓';
      btn.style.backgroundColor = '#81c784';
      alert('You followed this user!');
    });
  });

  // Menu items
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.menu-item.active').classList.remove('active');
      item.classList.add('active');
    });
  });
});
