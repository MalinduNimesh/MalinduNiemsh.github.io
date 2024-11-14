// JavaScript for tabs in the About Section
function openTab(event, tabName) {
    // Get all elements with class="tab-content" and hide them
    const tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(content => content.style.display = "none");

    // Get all elements with class="tab-button" and remove the class "active"
    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => button.classList.remove("active"));

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Set default tab on page load
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
});

// JavaScript for Smooth Scrolling on Navbar Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Clear form data
    document.getElementById('contact-form').reset();

    // Hide success message after 4 seconds
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 4000);
}

// Attach handleSubmit function to the form's submit event
document.getElementById('contact-form').addEventListener('submit', handleSubmit);

