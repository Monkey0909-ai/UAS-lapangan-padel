const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function () {

        cards.forEach(c => c.classList.remove("selected"));

        if (!card.classList.contains("booked")) {
            card.classList.add("selected");
        }
    });
});

const btn = document.querySelector(".btn");

if (btn) {
    btn.addEventListener("click", function () {
        alert("Booking berhasil!");
    });
}

const courts = document.querySelectorAll(".courts .court");

courts.forEach(btn => {
    btn.addEventListener("click", () => {
        courts.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

function login(e) {
    e.preventDefault();

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "123") {
        alert("Login berhasil!");
        window.location.href = "index.html";
    } else {
        alert("Username / Password salah!");
    }
}

function login(e) {
    e.preventDefault();

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "123") {
        window.location.href = "dashboard.html";
    } else {
        alert("Login gagal!");
    }
}