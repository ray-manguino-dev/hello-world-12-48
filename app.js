document.getElementById("nameForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const nameInput = document.getElementById("nameInput");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const name = nameInput.value.trim();

    if (name) {
        welcomeMessage.textContent = "Welcome, " + name + "! We"re glad you"re here.";
        nameInput.value = "";
    }
});