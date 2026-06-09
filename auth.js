// SIGNUP
function signupUser(event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("stacklyUsers")) || [];

    const existingUser = users.find(
        user => user.email === email
    );

    if (existingUser) {
        alert("Email already registered.");
        return;
    }

    users.push({
        name,
        email,
        password
    });

    localStorage.setItem(
        "stacklyUsers",
        JSON.stringify(users)
    );

    alert("Account created successfully.");

    window.location.href = "index.html";
}

// LOGIN
function loginUser(event) {
    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const users =
        JSON.parse(localStorage.getItem("stacklyUsers")) || [];

    const user = users.find(
        u =>
            u.email === email &&
            u.password === password
    );

    if (!user) {
        alert("Invalid email or password.");
        return;
    }

    localStorage.setItem(
        "stacklyLoggedInUser",
        JSON.stringify(user)
    );

    window.location.href = "dashboard.html";
}

// CHECK AUTH
function checkAuth() {
    const user =
        localStorage.getItem("stacklyLoggedInUser");

    if (!user) {
        window.location.href = "index.html";
    }
}

// SHOW USER
function loadUser() {
    const user = JSON.parse(
        localStorage.getItem("stacklyLoggedInUser")
    );

    if (user) {
        document.getElementById("username").innerText =
            user.name;
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem(
        "stacklyLoggedInUser"
    );

    window.location.href = "index.html";
}