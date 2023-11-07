var LoginForm = document.getElementById("loginForm");
var RegisterForm = document.getElementById("registerForm");
if (RegisterForm) {
    RegisterForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        var enteredUserName = document.getElementById('NewUsername').value;
        var enteredPassword = document.getElementById('NewPassword').value;

        RegisterUser(enteredUserName, enteredPassword);
    });
}

if (LoginForm) {
    LoginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        var enteredUserName = document.getElementById('Username').value;
        var enteredPassword = document.getElementById('Password').value;

        CheckUserCredintials(enteredUserName, enteredPassword);
    });
}

USERS = [
    {
        username: "Mohab",
        password: "123"
    },
    {
        username: "Nada",
        password: "123"
    },
    {
        username: "Farah",
        password: "123"
    },
    {
        username: "Ahmed",
        password: "123"
    },
    {
        username: "Ayman",
        password: "123"
    },
]

var loggedInUsername = null;
function CheckUserCredintials(EnteredUserName, EnteredPassword) {
    if (EnteredPassword && EnteredUserName) {
        // Check the in-memory USERS array first
        for (let index = 0; index < USERS.length; index++) {
            if (EnteredUserName === USERS[index].username
                && EnteredPassword === USERS[index].password) {
                loggedInUsername = EnteredUserName; // Set the loggedInUsername variable
                localStorage.setItem('loggedInUsername', loggedInUsername); // Store the username in localStorage
                alert("Login Success!");
                window.location.href = "../Library/index.html";
                return;
            }
        }

        // Check the updated USERS array from Local Storage
        const storedUsers = JSON.parse(localStorage.getItem('registeredUsers'));
        if (storedUsers) {
            for (let index = 0; index < storedUsers.length; index++) {
                if (EnteredUserName === storedUsers[index].username
                    && EnteredPassword === storedUsers[index].password) {
                    alert("Login Success!");
                    window.location.href = "../Library/index.html";
                    return;
                }
            }
        }

        alert("Wrong Username or Password");
    } else {
        alert("Enter a username and password!");
    }
    // Inside the CheckUserCredintials function in the first JavaScript code
    if (EnteredUserName === USERS[index].username && EnteredPassword === USERS[index].password) {
        alert("Login Success!");

        window.location.href = "../Library/index.html";
        return;
    }
}


function RegisterUser(enteredUserName, enteredPassword) {


    // Add the new user to the USERS array
    USERS.push({
        username: enteredUserName,
        password: enteredPassword
    });

    // Save the updated USERS array to Local Storage
    localStorage.setItem('registeredUsers', JSON.stringify(USERS));

    alert("User Registered!");
    window.location.href = "../LoginPage/index.html";
}
function getLoggedInUsername() {
    return loggedInUsername;
}



