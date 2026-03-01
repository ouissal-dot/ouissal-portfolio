const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("header ul");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });


 const btn = document.getElementById('send');
  const contactForm = document.getElementById('contact form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.innerText = 'Sending...';

    const serviceID = 'service_pb2376h'; 
    const templateID = 'template_471cywq'; 

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.innerText = 'Send Email';
        alert('Message sent successfully!');
        contactForm.reset();
      }, (err) => {
        btn.innerText = 'Send Email';
        alert('Failed to send: ' + JSON.stringify(err));
      });
  });