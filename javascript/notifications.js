const notifications = [
  "New course added: ReactJS",
  "Server maintenance on 30th April",
  "Upcoming Quiz: JavaScript Basics in 2 days",
  "New course available: Python for Beginners",
  "System updated successfully on 5th May"
];

const list = document.getElementById("notification-list");

notifications.forEach((msg) => {
  const li = document.createElement("li");
  li.className = "notification";
  li.textContent = msg;
  list.appendChild(li);
});
