/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Show success message
    successMessage.classList.add("show");

    // Reset form
    contactForm.reset();

    // Hide message after 5 seconds
    setTimeout(function () {
        successMessage.classList.remove("show");
    }, 5000);

});


/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = this.parentElement;

        // Close other FAQ items
        document.querySelectorAll(".faq-item").forEach(function (item) {

            if (item !== currentItem) {
                item.classList.remove("active");
            }

        });

        // Toggle current item
        currentItem.classList.toggle("active");

    });

});