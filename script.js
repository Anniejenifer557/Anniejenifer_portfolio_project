document.addEventListener("DOMContentLoaded",function () {
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameValue = document.getElementById("fname").value;
    const emailValue = document.getElementById("femail").value;
    const messageValue = document.getElementById("fmsg").value;

    fetch("https://anniejenifer-portfolio-project-2.onrender.com/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nameValue, email: emailValue, message: messageValue })
    })
    .then(res => res.text())
    .then(data => alert(data);
    document.getElementById("feedbackForm").reset();
    .catch(err => { console.log(err); 
        alert("Error ❌"); });
});