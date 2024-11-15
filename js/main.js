// JavaScript for basic interactivity and validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Your appointment has been booked successfully!");
            form.reset();
        });
    }
});
