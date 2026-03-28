window.onload = function() {
  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    event.stopPropagation();

    const nameValue = document.getElementById("fname").value;
    const emailValue = document.getElementById("femail").value;
    const messageValue = document.getElementById("ffeedback").value;

    fetch("http://127.0.0.1:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nameValue, email: emailValue, message: messageValue })
    })
    .then(res => res.text())
    .then(data => {
      document.getElementById("modal").style.display = "flex";
      document.getElementById("feedbackForm").reset();
    })
    .catch(err => {
      console.log(err);
      alert("Error ❌");
    });
  });
};

function closeModal() {
  document.getElementById("modal").style.display = "none";
}