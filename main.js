let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
};


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const message = document.getElementById("message").value;

    // Create a mailto link
    const mailtoLink = `mailto:madushansameera499@gmail.com?subject=New Project Inquiry&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AContact Number: ${telephone}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
});

