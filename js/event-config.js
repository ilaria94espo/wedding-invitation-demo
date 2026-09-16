/* =========================================================
   EVENT CONFIGURATION
   Change the values in this file to create a new event.
   The rest of the template can stay unchanged.
   ========================================================= */

const EVENT = {
    id: "sofia-luca-2027",
    type: "wedding",

    couple: {
        person1: "Sofia",
        person2: "Luca",
        names: "Sofia & Luca",
        initials: "S & L"
    },

    date: {
        iso: "2027-06-12T16:00:00+02:00",
        display: {
            it: "12 giugno 2027",
            en: "12 June 2027",
            de: "12. Juni 2027",
            fr: "12 juin 2027",
            es: "12 de junio de 2027"
        }
    },

    ceremony: {
        time: "16:00",
        venue: "Chiesa di Santa Maria",
        address: "Via delle Colline 18, Firenze",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Chiesa+di+Santa+Maria+Firenze"
    },

    reception: {
        time: "18:30",
        venue: "Villa Belvedere",
        address: "Via degli Ulivi 42, Firenze",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Villa+Belvedere+Firenze"
    },

    contact: {
        email: "sofiaeluca@example.com",
        phone: "+39 333 123 4567"
    },

    rsvp: {
        deadline: "2027-04-15",
        formUrl: "#rsvp"
    },

    theme: {
        primary: "#68735A",
        secondary: "#EDE7DA",
        accent: "#B39A6B",
        background: "#F8F5ED",
        paper: "#FFFDF8",
        text: "#2E3029"
    },

    images: {
        hero: "assets/images/hero-envelope.jpg",
        couple: "assets/images/couple.jpg",
        ceremony: "assets/images/ceremony.jpg",
        reception: "assets/images/reception.jpg",
        destination: "assets/images/destination.jpg",
        landscape: "assets/images/landscape.jpg"
    },

    sections: {
        information: true,
        contacts: true,
        directions: true,
        rsvp: true,
        gallery: true,
        schedule: true,
        faq: true,
        accommodation: true,
        transport: true,
        dressCode: true,
        gifts: true
    },

    gallery: [
        "assets/images/couple.jpg",
        "assets/images/ceremony.jpg",
        "assets/images/reception.jpg",
        "assets/images/destination.jpg"
    ]
};
