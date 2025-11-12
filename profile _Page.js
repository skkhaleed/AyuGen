document.addEventListener('DOMContentLoaded', () => {
  // Toggle dropdown on click (for mobile/touch)
  const triggers = document.querySelectorAll('.nav-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = trigger.nextElementSibling;
      if (menu.style.display === 'none') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'block'; // Keep open for demo; change to 'none' for production
    });
  });

  // Handle menu item clicks
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = item.getAttribute('data-action');
      switch(action) {
        case 'premium':
          alert('✨ You started a free Premium trial!');
          break;
        case 'settings':
          alert('⚙️ Opening Settings & Privacy...');
          break;
        case 'help':
          alert('❓ Opening Help Center...');
          break;
        case 'language':
          alert('🌐 Language settings opened.');
          break;
        case 'activity':
          alert('📊 Showing your Posts & Activity...');
          break;
        case 'job-posting':
          alert('💼 Opening Job Posting Account...');
          break;
        case 'logout':
          if (confirm('Are you sure you want to sign out?')) {
            alert('🚪 You have been signed out.');
            // window.location.href = '/login';
          }
          break;
        default:
          alert(`Action: ${item.textContent.trim()}`);
      }
    });
  });

  // View Profile button
  document.querySelector('.view-profile-btn')?.addEventListener('click', () => {
    alert('🚀 Opening your full LinkedIn profile...');
  });
});
