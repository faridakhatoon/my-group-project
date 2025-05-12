document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    // Default values
    const defaultEmail = "user@example.com";
    const defaultPassword = "123456";
  
    if (email === defaultEmail && password === defaultPassword) {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Replace with actual page
    } else {
      alert("Invalid email or password.");
    }
  });
  