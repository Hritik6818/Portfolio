
gsap.to("#page1 h1",{
    transform:"translateX(-190%)",
    delay:0.5,
    duration:1,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        // end:"top-100%", 
        scrub:2,
        pin:true
    }
})
gsap.from("nav",{
    x:-1300,
    duration:2,
    delay:0.7,
    scrollTrigger:"nav"
})


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic validation: Ensure name, email, and message are not empty
        if (name && email && message) {
            // Handle form submission (you can send the form data to a server)
            alert("Form submitted successfully!");
        } else {
            alert("Please fill out all required fields.");
        }
    });
});

    