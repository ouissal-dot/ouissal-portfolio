// --- Initialisation ---
let currentLang = 'en'; // Langue par défaut

// --- Menu Toggle ---
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector("header ul");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


function toggleLanguage() {
    
    currentLang = currentLang === 'en' ? 'de' : 'en';

    
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    
    const btn = document.getElementById('lang-toggle');
    if (currentLang === 'de') {
        btn.innerHTML = '<img src="images/germany.png">DE';
    } else {
        btn.innerHTML = 'EN'; 
    }
}

// --- Dictionnaire de traduction ---
const translations = {
    "en": {
        "about": "About",
        "contact": "Contact",
        "about-title": "Hey World, I'm Ouissal",
        "about-text": "Hey there! I’m Ouissal — a mix of creativity and good vibes!<br>I hold a professional degree in Digital Business Management and Entrepreneurship. With a background in programming and media buying.<br>When I’m not exploring new tech tools, you’ll probably find me playing games, binge-watching my favorite series, or dancing to recharge my energy.",
        "certif-title": "Certification",
        "proj-title": "Project",
        "proj-software": "Software",
        "proj-design": "Design",
        "desc-focus": "Focus Hub is an all-in-one productivity dashboard that combines essential tools like a to-do list, timer, calculator, and utilities in one place to help users stay organized and focused",
        "desc-job": "ines essezed and focused",
        
        "desc-wort": "WortMind is a flashcard-based learning app that helps users easily memorize German vocabulary with Arabic translations through interactive cards.",
        "desc-wort": "WortMind is a flashcard-based learning app that helps users easily memorize German vocabulary with Arabic translations through interactive cards.",
        "skills-title": "Skills",
        "skills-comment": "Familiar with",
        "contact-title": "let's be in touch"
    },
    "de": {
        "about": "Über mich",
        "contact": "Kontakt",
        "about-title": "Hallo Welt, ich bin Ouissal",
        "about-text": "Hallo! Ich bin Ouissal – eine Mischung aus Kreativität und guter Laune!<br>Ich habe einen professionellen Abschluss in Digital Business Management und Entrepreneurship. Mit einem Hintergrund in Programmierung und Media Buying.<br>Wenn ich nicht gerade neue Tech-Tools entdecke, findest du mich wahrscheinlich beim Spielen, beim Binge-Watching meiner Lieblingsserien oder beim Tanzen, um meine Energie aufzuladen.",
        "certif-title": "Zertifikate",
        "proj-title": "Projekte",
        "proj-software": "Software",
        "proj-design": "Design",
        "desc-job": "JobMatch AI ist eine einfache, intelligente App zur Jobempfehlung, die Nutzern dabei hilft, Stellen basierend auf ihren Fähigkeiten und ihrem Erfahrungslevel zu finden.",
        "desc-focus": "Focus Hub ist ein All-in-One-Produktivitäts-Dashboard, das wichtige Tools wie eine Aufgabenliste, einen Timer, einen Taschenrechner und Dienstprogramme kombiniert, damit Benutzer organisiert und fokussiert bleiben.",
        "desc-wort": "WortMind ist eine auf Karteikarten basierende Lern-App, mit der Benutzer dank interaktiver Karten leicht deutsches Vokabular mit arabischen Übersetzungen auswendig lernen können.",
        "skills-title": "Fähigkeiten",
        "skills-comment": "Vertraut mit",
        "contact-title": "Lass uns in Kontakt bleiben"
    }
};


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