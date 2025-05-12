// Search Courses
function searchCourses() {
  const input = document.getElementById("searchinput").value.toLowerCase();
  const courses = document.querySelectorAll(".course-card");

  courses.forEach(course => {
    const title = course.querySelector("h3").innerText.toLowerCase();
    course.style.display = title.includes(input) ? "block" : "none";
  });

  if (input.trim() === "") {
    courses.forEach(course => {
      course.style.display = "block";
    });
  }
}


function redirectToLogin() {
      window.location.href = "loginpage.html";
    }

    function searchCourses() {
      // Your course search logic
    }

// Modal Handling
// function openLoginModal() {
//   document.getElementById("loginModal").style.display = "block";
// }

// function closeLoginModal() {
//   document.getElementById("loginModal").style.display = "none";
// }

// function submitLogin() {
//   const email = document.getElementById("loginEmail").value;
//   const password = document.getElementById("loginPassword").value;
//   const error = document.getElementById("loginError");

//   if (!email || !password) {
//     error.innerText = "Please fill all fields!";
//   } else {
//     error.innerText = "";
//     alert("Login Successful!");
//     closeLoginModal();
//   }
// }

// function openSignupModal() {
//   document.getElementById("signupModal").style.display = "block";
// }

// function closeSignupModal() {
//   document.getElementById("signupModal").style.display = "none";
// }

// function submitSignup() {
//   const name = document.getElementById("signupName").value;
//   const email = document.getElementById("signupEmail").value;
//   const password = document.getElementById("signupPassword").value;
//   const confirmPassword = document.getElementById("confirmPassword").value;
//   const error = document.getElementById("signupError");

//   if (!name || !email || !password || !confirmPassword) {
//     error.innerText = "Please fill all fields!";
//   } else if (password !== confirmPassword) {
//     error.innerText = "Passwords do not match!";
//   } else {
//     error.innerText = "";
//     alert(`Signup Successful! Welcome, ${name}`);
//     closeSignupModal();
//   }
// }s



// Typing Animation for Explore Courses Heading
// const typingText = document.getElementById('typingText');
// const textArray = ["Explore Top Courses...", "Learn Anytime, Anywhere!", "Upgrade Your Skills Today!"];
// let textIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textIndex].length) {
//     typingText.innerHTML += textArray[textIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, 100);
//   } else {
//     setTimeout(erase, 2000);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     typingText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
//     charIndex--;
//     setTimeout(erase, 50);
//   } else {
//     textIndex++;
//     if (textIndex >= textArray.length) textIndex = 0;
//     setTimeout(type, 500);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() {
//   if (typingText) type();
// });

