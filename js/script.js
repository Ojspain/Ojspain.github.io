document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for all nav links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth scrolling for banner contact button
    document.getElementById('contact-button').addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('click', () => {
            // Check if the clicked item is already expanded
            const isExpanded = item.classList.contains('expanded');

            // Remove 'expanded' class from all skill items
            document.querySelectorAll('.skill-item').forEach(i => i.classList.remove('expanded'));

            // If the clicked item was not already expanded, expand it
            if (!isExpanded) {
                item.classList.add('expanded');
            }
        });
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".mySlides");
        let dots = document.querySelectorAll(".dot");
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex - 1].classList.add("active");
        setTimeout(showSlides, 5000); 
    }

    // Add event listener to the contact form submit button
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();
        // Call the function to validate the form
        validateContactForm();
    });
});

function validateContactForm() {
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const fullNameError = document.getElementById("full-name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    fullNameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (fullName === "" || /\d/.test(fullName)) {
        fullNameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    }

    // If form is not valid, stop further execution
    if (!isValid) {
        return;
    }

    // If form is valid, display success message
    const successMessage = document.createElement('p');
    successMessage.textContent = "Message Sent!";
    successMessage.style.color = "#008000"; // Green color
    document.getElementById('contact-form').appendChild(successMessage);
}
