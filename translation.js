//====================Translation Definition====================
const translations = {
    en: {
        "nav-main": "House Schartner",
        "nav-section1": "Apartments",
        "nav-contact": "Inquiries and Contact",
        "nav-place": "About Wagrain",
        "hero-h1": "House Apartments<br/>Schartner",
        "hero-h2": "Holiday in the Salzburg Mountains!",
        "hero-cta": "Inquire Now",
        "welcome": "Welcome to House Schartner, in WAGRAIN!",
        "welcome-p1": "Our family-friendly house is located in a sunny spot in Moadörfl - Wagrain, 2.5 km from the Flachau highway exit! The ideal location for a relaxing, soothing, or active vacation for the whole family.",
        "welcome-p2": "The special charm of our house lies in the direct access to the Salzburg Sport World Amadé, at the red 8-seater gondola lift (Wagrain Höhenbahn).",
        "welcome-p3": "300m away, the well-prepared 120 km Tauernloipe passes by, offering everything that a cross-country skiing enthusiast’s heart desires!",
        "benefits": "Benefits:",
        "benefits-p1": "Our family-friendly house is located in a sunny spot in Moadörfl - Wagrain, 2.5 km from the Flachau highway exit! The ideal location for a relaxing, soothing, or active vacation for the whole family.",
        "benefits-p2": "The special charm of our house lies in the direct access to the Salzburg Sport World Amadé, at the red 8-seater gondola lift (Wagrain Höhenbahn).",
        "benefits-p3": "300m away, the well-prepared 120 km Tauernloipe passes by, offering everything that a cross-country skiing enthusiast’s heart desires!",
        "main-h2": "Accommodations",
        "main-apartment-1": "Apartment 1",
        "main-apartment-1-p1": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit, optio sint, quibusdam eos velit animi obcaecati ullam neque amet dolorum ipsum asperiores odio saepe, cum quidem quia mollitia! Rem?",
        "main-apartment-1-p2": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit, optio sint, quibusdam eos velit animi obcaecati ullam neque amet dolorum ipsum asperiores odio saepe, cum quidem quia mollitia! Rem?",
        "main-apartment-1-p3": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit, optio sint, quibusdam eos velit animi obcaecati ullam neque amet dolorum ipsum asperiores odio saepe, cum quidem quia mollitia! Rem?"
    },
    de: {
        "nav-main": "Haus Schartner",
        "nav-section1": "Appartments",
        "nav-contact": "Anfragen und Kontakt",
        "nav-place": "Über Wagrain",
        "hero-h1": "Haus Apartments<br/>Schartner",
        "hero-h2": "Urlaub in der Salzburger Bergwelt!",
        "hero-cta": "Jetzt anfragen",
        "welcome": "Herzlich Willkommen im Hause Schartner, in WAGRAIN!",
        "welcome-p1": "Unser familienfreundliches Haus, liegt in sonniger Lage im Moadörfl - Wagrain, 2,5 km von der Autobahnausfahrt Flachau entfernt! Die ideale Lage für einen erholsamen, entspannenden oder aktiven Urlaub für die ganze Familie.",
        "welcome-p2": "Der besondere Reiz an unserem Haus liegt am direkten Einstieg in die Salzburger Sportwelt Amadé, an der roten 8er Gondelbahn (Wagrainer Höhenbahn).",
        "home-welcome-p3": "In 300m Entfernung, führt die bestens präparierte, 120 km lange Tauernloipe vorbei, die alles bietet was das Langlaufherz höher schlagen lässt!",
        "benefits": "Benefits:",
        "benefits-p1": "Unser familienfreundliches Haus, liegt in sonniger Lage im Moadörfl - Wagrain, 2,5 km von der Autobahnausfahrt Flachau entfernt! Die ideale Lage für einen erholsamen, entspannenden oder aktiven Urlaub für die ganze Familie.",
        "benefits-p2": "Der besondere Reiz an unserem Haus liegt am direkten Einstieg in die Salzburger Sportwelt Amadé, an der roten 8er Gondelbahn (Wagrainer Höhenbahn).",
        "benefits-p3": "In 300m Entfernung, führt die bestens präparierte, 120 km lange Tauernloipe vorbei, die alles bietet was das Langlaufherz höher schlagen lässt!",
        "main-h2": "Unterkünfte",
        "main-apartment-1": "Apartment 1",
        "main-apartment-1-p1": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit, optio sint, quibusdam eos velit animi obcaecati ullam neque amet dolorum ipsum asperiores odio saepe, cum quidem quia mollitia! Rem?",
        "main-apartment-1-p2": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit, optio sint, quibusdam eos velit animi obcaecati ullam neque amet dolorum ipsum asperiores odio saepe, cum quidem quia mollitia! Rem?",
        "main-apartment-1-p3": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit, optio sint, quibusdam eos velit animi obcaecati ullam neque amet dolorum ipsum asperiores odio saepe, cum quidem quia mollitia! Rem?"
    }
};

//Function to change the language is called by the HTML
function changeLanguage(language) {
    const flagIcon = document.querySelector('.flag-icon');

    const elements = document.querySelectorAll('[data-lang]');
   
    elements.forEach(el => {
      const key = el.getAttribute('data-lang');
      if (translations[language] && translations[language][key]) {
        el.innerHTML = translations[language][key];
      }
    });

     // Change Flag ICON
     if (language === 'de') {
        flagIcon.src = 'Pictures/Flags/de.svg';
        flagIcon.alt = 'Deutsch';
    } else if (language === 'en') {
        flagIcon.src = 'Pictures/Flags/us.svg';
        flagIcon.alt = 'English';
    }

}

//Load language based on Browsersettings
function loadBasedOnBrowserLanguage() {
    //Get Browser language "de", "en", ...
    const browserLang = navigator.language || navigator.userLanguage;
    
    //Only use first part, because "de-DE" is also Supported
    const lang = browserLang.split('-')[0];

    //Is there a Translation for the language?
    if (translations[lang]) {
        changeLanguage(lang);
    } else {
        changeLanguage('en');
    }
}

//Set Browser language on load
window.onload = () => {
    loadBasedOnBrowserLanguage();
};