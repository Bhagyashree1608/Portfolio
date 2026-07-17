// =====================================================
// Contact Form Initialization
// =====================================================

function initContactForm() {

    // Initialize EmailJS
    emailjs.init({
        publicKey: "AI1JdfawSFV8LNT2T"
    });

    // DOM Elements
    const contactForm = document.getElementById("contactForm");
    const sendBtn = document.getElementById("sendBtn");
    const formStatus = document.getElementById("formStatus");

    // If contact section hasn't loaded yet, exit
    if (!contactForm || !sendBtn || !formStatus) return;

    // Prevent multiple event listeners if function is called again
    if (contactForm.dataset.initialized) return;
    contactForm.dataset.initialized = "true";

    // =====================================================
    // Form Submit
    // =====================================================

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation
        if (!name || !email || !message) {

            formStatus.textContent = "⚠ Please fill in all fields.";
            formStatus.className = "text-red-400 text-center mt-4";

            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formStatus.textContent = "⚠ Please enter a valid email address.";
            formStatus.className = "text-red-400 text-center mt-4";

            return;
        }

        // Loading State
        sendBtn.disabled = true;
        sendBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';

        formStatus.textContent = "";

        // =====================================================
        // Send Email
        // =====================================================

        emailjs.send(
            "service_2tmlul4",
            "template_s7liat5",
            {
                from_name: name,
                from_email: email,
                message: message
            }
        )

        .then(() => {

            formStatus.textContent =
                "✅ Message sent successfully. Thank you for contacting me!";

            formStatus.className =
                "text-green-400 text-center mt-4";

            contactForm.reset();

        })

        .catch((error) => {

            console.error("EmailJS Error:", error);

            formStatus.textContent =
                "❌ Failed to send message. Please try again later.";

            formStatus.className =
                "text-red-400 text-center mt-4";

        })

        .finally(() => {

            sendBtn.disabled = false;

            sendBtn.innerHTML =
                '<i class="fa-solid fa-paper-plane mr-2"></i> Send Message';

        });

    });

}