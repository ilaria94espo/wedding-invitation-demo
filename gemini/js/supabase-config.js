// Configurazione client Supabase
const SUPABASE_URL = "https://TUO-PROJECT-ID.supabase.co";
const SUPABASE_ANON_KEY = "TUO-SUPABASE-ANON-KEY";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Gestione dell'invio del modulo RSVP
document.addEventListener("DOMContentLoaded", () => {
  const rsvpForm = document.getElementById("rsvp");
  const rsvpMessage = document.getElementById("rsvpMessage");

  if (rsvpForm) {
    rsvpForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      rsvpMessage.textContent = "Invio in corso...";

      const formData = new FormData(rsvpForm);
      const payload = {
        name: formData.get("name"),
        attending: formData.get("attending") === "yes",
        guests: parseInt(formData.get("guests"), 10) || 1,
        dietary: formData.get("dietary") || ""
      };

      try {
        const { data, error } = await supabaseClient
          .from("rsvps")
          .insert([payload]);

        if (error) throw error;

        rsvpMessage.style.color = "#68735a";
        rsvpMessage.textContent = "Grazie! La tua risposta è stata registrata con successo.";
        rsvpForm.reset();
      } catch (err) {
        console.error("Errore Supabase:", err);
        rsvpMessage.style.color = "#a94442";
        rsvpMessage.textContent = "Si è verificato un errore durante l'invio. Riprova più tardi.";
      }
    });
  }
});