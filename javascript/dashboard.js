// dashboard.js

// Add scroll animation
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

// Profile image upload with localStorage
// const profileInput = document.getElementById('profile-upload');
// const profilePic = document.getElementById('profile-pic');

// profileInput.addEventListener('change', () => {
//   const file = profileInput.files[0];
//   const reader = new FileReader();

//   reader.onloadend = () => {
//     profilePic.src = reader.result;
//     localStorage.setItem('profilePic', reader.result);
//   };

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// });


// Profile image upload with localStorage
const profileInput = document.getElementById('profile-upload');
const profilePic = document.getElementById('profile-pic');

if (profileInput) {
  profileInput.addEventListener('change', () => {
    const file = profileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      profilePic.src = reader.result;
      localStorage.setItem('profileImage', reader.result);
      localStorage.setItem('profilePic', reader.result); // Support old key if used
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });
}

// Load profile data from localStorage and reflect on dashboard
window.addEventListener('DOMContentLoaded', function () {
  const savedName = localStorage.getItem('profileName');
  const savedEmail = localStorage.getItem('profileEmail');
  const savedImage = localStorage.getItem('profileImage') || localStorage.getItem('profilePic');

  if (savedName) {
    const nameElement = document.getElementById('profile-name');
    if (nameElement) nameElement.textContent = savedName;
  }

  if (savedEmail) {
    const emailElement = document.getElementById('profile-email');
    if (emailElement) emailElement.textContent = savedEmail;
  }

  if (savedImage) {
    const imageElement = document.getElementById('profile-pic');
    if (imageElement) imageElement.src = savedImage;
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const savedPic = localStorage.getItem('profilePic');
  if (savedPic) {
    profilePic.src = savedPic;
  }

  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});

// Dark mode toggle with localStorage
const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
});
