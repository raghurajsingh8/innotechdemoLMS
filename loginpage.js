const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
];

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
       
        window.location.href = "home.html";
                    

    } else {
        alert("Login failed. Please check your username and password.");
    }
}

function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (!username || !password) {
        alert("Please fill in both username and password fields.");
        return;
    }

    if (users.some(u => u.username === username)) {
        alert("Username is already taken. Please choose a different one.");
    } else {
        users.push({ username, password });
        alert("Account created successfully!");
    }
}
