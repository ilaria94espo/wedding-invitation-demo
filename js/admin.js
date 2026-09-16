const loginView = document.querySelector("#loginView");
const dashboardView = document.querySelector("#dashboardView");
const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");
const dashboardMessage = document.querySelector("#dashboardMessage");

const eventLabel = document.querySelector("#eventLabel");
const totalResponses = document.querySelector("#totalResponses");
const attendingCount = document.querySelector("#attendingCount");
const notAttendingCount = document.querySelector("#notAttendingCount");
const dietaryCount = document.querySelector("#dietaryCount");
const rsvpRows = document.querySelector("#rsvpRows");

const ADMIN_TRANSLATIONS = {
  it: {
    adminLabel: "EVENT ADMIN",
    dashboardTitle: "Dashboard RSVP",
    loginSubtitle: "Accesso riservato agli organizzatori.",
    email: "Email",
    password: "Password",
    login: "Accedi",
    logout: "Esci",
    responses: "Conferme",
    attending: "Partecipanti",
    notAttending: "Non partecipano",
    dietary: "Esigenze alimentari",
    responsesReceived: "Conferme ricevute",
    updatedFromSupabase: "Aggiornato dal database Supabase.",
    refresh: "Aggiorna",
    name: "Nome",
    attendance: "Presenza",
    guests: "Ospiti",
    dietaryNeeds: "Esigenze alimentari",
    date: "Data",
    yes: "Sì",
    no: "No",
    loading: "Caricamento…",
    noResponses: "Nessuna conferma ricevuta.",
    loginError: "Email o password non corretti.",
    loadError: "Impossibile caricare le conferme. Controlla la policy SELECT.",
    eventPrefix: "Evento"
  },
  en: {
    adminLabel: "EVENT ADMIN",
    dashboardTitle: "RSVP Dashboard",
    loginSubtitle: "Organizer access only.",
    email: "Email",
    password: "Password",
    login: "Sign in",
    logout: "Log out",
    responses: "Responses",
    attending: "Attending",
    notAttending: "Not attending",
    dietary: "Dietary needs",
    responsesReceived: "Responses received",
    updatedFromSupabase: "Updated from the Supabase database.",
    refresh: "Refresh",
    name: "Name",
    attendance: "Attendance",
    guests: "Guests",
    dietaryNeeds: "Dietary needs",
    date: "Date",
    yes: "Yes",
    no: "No",
    loading: "Loading…",
    noResponses: "No responses received.",
    loginError: "Incorrect email or password.",
    loadError: "Could not load responses. Check the SELECT policy.",
    eventPrefix: "Event"
  },
  de: {
    adminLabel: "EVENT-ADMIN",
    dashboardTitle: "RSVP-Dashboard",
    loginSubtitle: "Nur für Veranstalter.",
    email: "E-Mail",
    password: "Passwort",
    login: "Anmelden",
    logout: "Abmelden",
    responses: "Zusagen",
    attending: "Teilnehmende",
    notAttending: "Nicht teilnehmend",
    dietary: "Ernährungsbedürfnisse",
    responsesReceived: "Eingegangene Zusagen",
    updatedFromSupabase: "Aus der Supabase-Datenbank aktualisiert.",
    refresh: "Aktualisieren",
    name: "Name",
    attendance: "Teilnahme",
    guests: "Gäste",
    dietaryNeeds: "Ernährungsbedürfnisse",
    date: "Datum",
    yes: "Ja",
    no: "Nein",
    loading: "Wird geladen…",
    noResponses: "Noch keine Zusagen eingegangen.",
    loginError: "E-Mail oder Passwort ist falsch.",
    loadError: "Zusagen konnten nicht geladen werden. SELECT-Richtlinie prüfen.",
    eventPrefix: "Event"
  },
  fr: {
    adminLabel: "ADMINISTRATION DE L’ÉVÉNEMENT",
    dashboardTitle: "Tableau de bord RSVP",
    loginSubtitle: "Accès réservé aux organisateurs.",
    email: "E-mail",
    password: "Mot de passe",
    login: "Se connecter",
    logout: "Se déconnecter",
    responses: "Réponses",
    attending: "Participants",
    notAttending: "Ne participent pas",
    dietary: "Besoins alimentaires",
    responsesReceived: "Réponses reçues",
    updatedFromSupabase: "Mis à jour depuis la base de données Supabase.",
    refresh: "Actualiser",
    name: "Nom",
    attendance: "Présence",
    guests: "Invités",
    dietaryNeeds: "Besoins alimentaires",
    date: "Date",
    yes: "Oui",
    no: "Non",
    loading: "Chargement…",
    noResponses: "Aucune réponse reçue.",
    loginError: "E-mail ou mot de passe incorrect.",
    loadError: "Impossible de charger les réponses. Vérifiez la politique SELECT.",
    eventPrefix: "Événement"
  },
  es: {
    adminLabel: "ADMINISTRACIÓN DEL EVENTO",
    dashboardTitle: "Panel de RSVP",
    loginSubtitle: "Acceso exclusivo para organizadores.",
    email: "Correo electrónico",
    password: "Contraseña",
    login: "Iniciar sesión",
    logout: "Cerrar sesión",
    responses: "Confirmaciones",
    attending: "Asistentes",
    notAttending: "No asisten",
    dietary: "Necesidades alimentarias",
    responsesReceived: "Confirmaciones recibidas",
    updatedFromSupabase: "Actualizado desde la base de datos de Supabase.",
    refresh: "Actualizar",
    name: "Nombre",
    attendance: "Asistencia",
    guests: "Invitados",
    dietaryNeeds: "Necesidades alimentarias",
    date: "Fecha",
    yes: "Sí",
    no: "No",
    loading: "Cargando…",
    noResponses: "No se han recibido confirmaciones.",
    loginError: "Correo o contraseña incorrectos.",
    loadError: "No se pueden cargar las confirmaciones. Comprueba la política SELECT.",
    eventPrefix: "Evento"
  }
};

let adminLanguage = localStorage.getItem("adminLanguage") || localStorage.getItem("eventLanguage") || "it";
if (!ADMIN_TRANSLATIONS[adminLanguage]) adminLanguage = "it";

function t(key) {
  return ADMIN_TRANSLATIONS[adminLanguage][key] || ADMIN_TRANSLATIONS.it[key] || key;
}

function applyAdminLanguage() {
  document.documentElement.lang = adminLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    button.textContent = adminLanguage.toUpperCase();
  });

  eventLabel.textContent = `${t("eventPrefix")}: ${EVENT.couple.names} · ${EVENT.date.display[adminLanguage] || EVENT.date.display.it}`;
  document.title = t("dashboardTitle");
}

function setAdminLanguage(lang) {
  if (!ADMIN_TRANSLATIONS[lang]) return;
  adminLanguage = lang;
  localStorage.setItem("adminLanguage", lang);
  applyAdminLanguage();
  closeLanguageMenus();
  loadRsvps();
}

function closeLanguageMenus() {
  document.querySelectorAll(".language-dropdown").forEach((dropdown) => dropdown.classList.add("hidden"));
  document.querySelectorAll(".language-button").forEach((button) => button.setAttribute("aria-expanded", "false"));
}

function setupLanguageMenu(buttonId, dropdownId) {
  const button = document.querySelector(`#${buttonId}`);
  const dropdown = document.querySelector(`#${dropdownId}`);
  if (!button || !dropdown) return;

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = dropdown.classList.contains("hidden");
    closeLanguageMenus();
    if (willOpen) {
      dropdown.classList.remove("hidden");
      button.setAttribute("aria-expanded", "true");
    }
  });

  dropdown.querySelectorAll("[data-lang]").forEach((item) => {
    item.addEventListener("click", () => setAdminLanguage(item.dataset.lang));
  });
}

function showLogin() {
  loginView.classList.remove("hidden");
  dashboardView.classList.add("hidden");
  applyAdminLanguage();
}

function showDashboard() {
  loginView.classList.add("hidden");
  dashboardView.classList.remove("hidden");
  applyAdminLanguage();
}

async function loadRsvps() {
  if (dashboardView.classList.contains("hidden")) return;

  showMessage(dashboardMessage, t("loading"));

  const { data, error } = await supabaseClient
    .from("rsvps")
    .select("name, attending, guests, dietary, created_at")
    .eq("event_id", EVENT.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    showMessage(dashboardMessage, t("loadError"), "error");
    return;
  }

  const rows = data || [];
  totalResponses.textContent = rows.length;
  attendingCount.textContent = rows.filter(row => row.attending).reduce((sum, row) => sum + (row.guests || 0), 0);
  notAttendingCount.textContent = rows.filter(row => !row.attending).length;
  dietaryCount.textContent = rows.filter(row => row.dietary && row.dietary.trim()).length;

  rsvpRows.innerHTML = rows.map(row => {
    const date = new Date(row.created_at).toLocaleString(adminLanguage === "it" ? "it-IT" : adminLanguage, {
      dateStyle: "short",
      timeStyle: "short"
    });
    return `
      <tr>
        <td>${escapeHtml(row.name)}</td>
        <td><span class="badge ${row.attending ? "yes" : "no"}">${row.attending ? t("yes") : t("no")}</span></td>
        <td>${row.guests ?? 0}</td>
        <td>${escapeHtml(row.dietary || "—")}</td>
        <td>${date}</td>
      </tr>
    `;
  }).join("");

  showMessage(dashboardMessage, rows.length ? "" : t("noResponses"));
}

function showMessage(element, text, type = "") {
  element.textContent = text;
  element.className = `message ${type}`.trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;

  showMessage(loginMessage, t("loading"));

  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

  if (error) {
    console.error(error);
    showMessage(loginMessage, t("loginError"), "error");
    return;
  }

  loginForm.reset();
  showDashboard();
  await loadRsvps();
});

document.querySelector("#logoutButton").addEventListener("click", async () => {
  await supabaseClient.auth.signOut();
  showLogin();
});

document.querySelector("#refreshButton").addEventListener("click", loadRsvps);

setupLanguageMenu("languageButton", "languageDropdown");
setupLanguageMenu("dashboardLanguageButton", "dashboardLanguageDropdown");

document.addEventListener("click", closeLanguageMenus);

supabaseClient.auth.onAuthStateChange(async (_event, session) => {
  if (session) {
    showDashboard();
    await loadRsvps();
  } else {
    showLogin();
  }
});

applyAdminLanguage();
