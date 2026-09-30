/* * =========================================================
   ADMIN DASHBOARD
   Wedding RSVP
   ========================================================= */


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const loginView = document.querySelector("#loginView");
const dashboardView = document.querySelector("#dashboardView");

const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");
const demoLoginButton = document.querySelector("#demoLoginButton");
const dashboardMessage = document.querySelector("#dashboardMessage");

const eventLabel = document.querySelector("#eventLabel");

const totalResponses = document.querySelector("#totalResponses");
const attendingCount = document.querySelector("#attendingCount");
const notAttendingCount = document.querySelector("#notAttendingCount");
const dietaryCount = document.querySelector("#dietaryCount");

const rsvpRows = document.querySelector("#rsvpRows");


/* =========================================================
   GUEST DOM
   ========================================================= */

const guestForm = document.querySelector("#guestForm");
const guestRows = document.querySelector("#guestRows");
const guestSearch = document.querySelector("#guestSearch");
const guestCountLabel = document.querySelector("#guestCountLabel");

const guestFormMessage = document.querySelector("#guestFormMessage");
const guestMessage = document.querySelector("#guestMessage");

const guestId = document.querySelector("#guestId");
const guestFirstName = document.querySelector("#guestFirstName");
const guestLastName = document.querySelector("#guestLastName");
const guestAttending = document.querySelector("#guestAttending");
const guestType = document.querySelector("#guestType");
const guestDietary = document.querySelector("#guestDietary");
const guestNotes = document.querySelector("#guestNotes");


/* =========================================================
   TABLE DOM
   ========================================================= */

const tableForm = document.querySelector("#tableForm");
const tableId = document.querySelector("#tableId");
const tableName = document.querySelector("#tableName");
const tableCapacity = document.querySelector("#tableCapacity");

const tableFormMessage = document.querySelector("#tableFormMessage");
const tableMessage = document.querySelector("#tableMessage");
const tableCards = document.querySelector("#tableCards");

const totalTables = document.querySelector("#totalTables");
const totalSeats = document.querySelector("#totalSeats");
const occupiedSeats = document.querySelector("#occupiedSeats");
const freeSeats = document.querySelector("#freeSeats");

const addTableButton = document.querySelector("#addTableButton");
const cancelTableButton = document.querySelector("#cancelTableButton");


/* =========================================================
   CACHE
   ========================================================= */

let cachedRsvps = [];
let cachedGuests = [];
let cachedGuestGroups = [];
let cachedTables = [];


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const ADMIN_TRANSLATIONS = {

  it: {

    /* General */

    adminLabel: "EVENT ADMIN",
    confirmed: "Confermato",

    dashboardTitle: "Dashboard RSVP",
    loginSubtitle: "Accesso riservato agli organizzatori.",

    email: "Email",
    password: "Password",
    login: "Accedi",
    demoLogin: "🎭 Accedi alla demo",
    demoNote: "Modalità dimostrativa · nessuna password richiesta",
    demoDivider: "oppure",
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

    eventPrefix: "Evento",

    /* Guests */

    guestManagement: "Gestione invitati",
    guestManagementSubtitle: "Inserisci e gestisci la lista degli invitati.",

    addGuest: "+ Aggiungi invitato",

    firstName: "Nome",
    lastName: "Cognome",

    guestStatus: "Stato",
    guestType: "Tipo",

    adult: "Adulto",
    child: "Bambino",
    infant: "Neonato (senza posto)",

    notes: "Note",

    saveGuest: "Salva invitato",
    cancel: "Annulla",

    searchGuests: "Cerca invitato…",

    actions: "Azioni",
    edit: "Modifica",
    delete: "Elimina",

    noGuests: "Nessun invitato inserito.",

    guestSaved: "Invitato salvato.",
    guestDeleted: "Invitato eliminato.",

    guestLoadError: "Impossibile caricare gli invitati.",
    guestSaveError: "Impossibile salvare l’invitato.",
    guestDeleteError: "Impossibile eliminare l’invitato.",

    confirmDeleteGuest:
      "Vuoi davvero eliminare questo invitato?",

    placeholder: "segnaposto",

    guest: "Accompagnatore",

    addToGuests: "+ Aggiungi agli invitati",
    alreadyGuest: "Già negli invitati",

    guestCreatedFromRsvp:
      "Invitati aggiunti alla lista.",

    guestGroupCreated:
      "Gruppo invitati creato.",

    rsvpGuestError:
      "Impossibile aggiungere l’RSVP agli invitati.",

    guestSourceRsvp: "Da RSVP",

    /* Tables */

    tableManagement: "Gestione tavoli",

    tableManagementSubtitle:
      "Organizza gli invitati ai tavoli del ricevimento.",

    addTable: "+ Aggiungi tavolo",

    tableName: "Nome tavolo",
    tableCapacity: "Posti",

    saveTable: "Salva tavolo",

    totalTables: "Tavoli",
    totalSeats: "Posti totali",
    occupiedSeats: "Posti occupati",
    freeSeats: "Posti disponibili",

    tableEmpty: "Nessun invitato assegnato.",

    tableFull: "Completo",

    seats: "posti",
    seat: "posto",

    people: "invitati",
    person: "invitato",

    assignGuest: "Assegna",
    removeGuestFromTable: "Rimuovi {name} dal tavolo",

    editTable: "Modifica tavolo",
    deleteTable: "Elimina tavolo",

    unassigned: "Non assegnati",

    noTables:
      "Nessun tavolo creato.",

    tableSaved:
      "Tavolo salvato.",

    tableDeleted:
      "Tavolo eliminato.",

    tableSaveError:
      "Impossibile salvare il tavolo.",

    tableDeleteError:
      "Impossibile eliminare il tavolo.",

    tableLoadError:
      "Impossibile caricare i tavoli.",

    confirmDeleteTable:
      "Vuoi davvero eliminare questo tavolo?",

    tableCapacityError:
      "La capacità del tavolo non può essere inferiore ai posti già occupati.",

    tableFullError:
      "Il tavolo è pieno. Questo invitato occupa un posto.",

    guestAssigned:
      "Invitato assegnato al tavolo.",

    guestUnassigned:
      "Invitato rimosso dal tavolo.",

    assignmentError:
      "Impossibile modificare l’assegnazione.",

    noUnassignedGuests:
      "Tutti gli invitati partecipanti sono stati assegnati.",

    infantNoSeat:
      "Neonato · senza posto",

    seatOccupied:
      "posto occupato",

    seatsOccupied:
      "posti occupati"
  },


  en: {

    adminLabel: "EVENT ADMIN",
    confirmed: "Confirmed",

    dashboardTitle: "RSVP Dashboard",
    loginSubtitle: "Organizer access only.",

    email: "Email",
    password: "Password",
    login: "Sign in",
    demoLogin: "🎭 Open demo",
    demoNote: "Demo mode · no password required",
    demoDivider: "or",
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

    eventPrefix: "Event",

    guestManagement: "Guest management",
    guestManagementSubtitle: "Add and manage the guest list.",

    addGuest: "+ Add guest",

    firstName: "First name",
    lastName: "Last name",

    guestStatus: "Status",
    guestType: "Type",

    adult: "Adult",
    child: "Child",
    infant: "Infant (no seat)",

    notes: "Notes",

    saveGuest: "Save guest",
    cancel: "Cancel",

    searchGuests: "Search guest…",

    actions: "Actions",
    edit: "Edit",
    delete: "Delete",

    noGuests: "No guests added.",

    guestSaved: "Guest saved.",
    guestDeleted: "Guest deleted.",

    guestLoadError: "Could not load guests.",
    guestSaveError: "Could not save the guest.",
    guestDeleteError: "Could not delete the guest.",

    confirmDeleteGuest:
      "Do you really want to delete this guest?",

    placeholder: "placeholder",

    guest: "Guest",

    addToGuests: "+ Add to guest list",
    alreadyGuest: "Already in guest list",

    guestCreatedFromRsvp:
      "Guests added to the list.",

    guestGroupCreated:
      "Guest group created.",

    rsvpGuestError:
      "Could not add the RSVP to the guest list.",

    guestSourceRsvp: "From RSVP",

    tableManagement: "Table management",

    tableManagementSubtitle:
      "Organize guests at the reception tables.",

    addTable: "+ Add table",

    tableName: "Table name",
    tableCapacity: "Seats",

    saveTable: "Save table",

    totalTables: "Tables",
    totalSeats: "Total seats",
    occupiedSeats: "Occupied seats",
    freeSeats: "Available seats",

    tableEmpty: "No guests assigned.",

    tableFull: "Full",

    seats: "seats",
    seat: "seat",

    people: "guests",
    person: "guest",

    assignGuest: "Assign",
    removeGuestFromTable: "Remove {name} from table",

    editTable: "Edit table",
    deleteTable: "Delete table",

    unassigned: "Unassigned",

    noTables:
      "No tables created.",

    tableSaved:
      "Table saved.",

    tableDeleted:
      "Table deleted.",

    tableSaveError:
      "Could not save the table.",

    tableDeleteError:
      "Could not delete the table.",

    tableLoadError:
      "Could not load tables.",

    confirmDeleteTable:
      "Do you really want to delete this table?",

    tableCapacityError:
      "Table capacity cannot be lower than the seats already occupied.",

    tableFullError:
      "The table is full. This guest occupies a seat.",

    guestAssigned:
      "Guest assigned to table.",

    guestUnassigned:
      "Guest removed from table.",

    assignmentError:
      "Could not change the assignment.",

    noUnassignedGuests:
      "All attending guests have been assigned.",

    infantNoSeat:
      "Infant · no seat",

    seatOccupied:
      "seat occupied",

    seatsOccupied:
      "seats occupied"
  },


  de: {

    adminLabel: "EVENT-ADMIN",
    confirmed: "Bestätigt",

    dashboardTitle: "RSVP-Dashboard",
    loginSubtitle: "Nur für Veranstalter.",

    email: "E-Mail",
    password: "Passwort",
    login: "Anmelden",
    demoLogin: "🎭 Demo öffnen",
    demoNote: "Demomodus · kein Passwort erforderlich",
    demoDivider: "oder",
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

    eventPrefix: "Event",

    guestManagement: "Gästeverwaltung",
    guestManagementSubtitle: "Gästeliste hinzufügen und verwalten.",

    addGuest: "+ Gast hinzufügen",

    firstName: "Vorname",
    lastName: "Nachname",

    guestStatus: "Status",
    guestType: "Art",

    adult: "Erwachsener",
    child: "Kind",
    infant: "Baby (kein Sitzplatz)",

    notes: "Notizen",

    saveGuest: "Gast speichern",
    cancel: "Abbrechen",

    searchGuests: "Gast suchen…",

    actions: "Aktionen",
    edit: "Bearbeiten",
    delete: "Löschen",

    noGuests: "Noch keine Gäste eingetragen.",

    guestSaved: "Gast gespeichert.",
    guestDeleted: "Gast gelöscht.",

    guestLoadError: "Gäste konnten nicht geladen werden.",
    guestSaveError: "Gast konnte nicht gespeichert werden.",
    guestDeleteError: "Gast konnte nicht gelöscht werden.",

    confirmDeleteGuest:
      "Möchten Sie diesen Gast wirklich löschen?",

    placeholder: "Platzhalter",

    guest: "Begleitperson",

    addToGuests: "+ Zur Gästeliste",
    alreadyGuest: "Bereits in Gästeliste",

    guestCreatedFromRsvp:
      "Gäste zur Liste hinzugefügt.",

    guestGroupCreated:
      "Gästegruppe erstellt.",

    rsvpGuestError:
      "RSVP konnte nicht zur Gästeliste hinzugefügt werden.",

    guestSourceRsvp: "Aus RSVP",

    tableManagement: "Tischverwaltung",

    tableManagementSubtitle:
      "Gäste an den Tischen der Feier organisieren.",

    addTable: "+ Tisch hinzufügen",

    tableName: "Tischname",
    tableCapacity: "Plätze",

    saveTable: "Tisch speichern",

    totalTables: "Tische",
    totalSeats: "Plätze gesamt",
    occupiedSeats: "Belegte Plätze",
    freeSeats: "Freie Plätze",

    tableEmpty: "Keine Gäste zugewiesen.",

    tableFull: "Voll",

    seats: "Plätze",
    seat: "Platz",

    people: "Gäste",
    person: "Gast",

    assignGuest: "Zuweisen",
    removeGuestFromTable: "{name} vom Tisch entfernen",

    editTable: "Tisch bearbeiten",
    deleteTable: "Tisch löschen",

    unassigned: "Nicht zugewiesen",

    noTables: "Noch keine Tische erstellt.",

    tableSaved: "Tisch gespeichert.",
    tableDeleted: "Tisch gelöscht.",

    tableSaveError:
      "Tisch konnte nicht gespeichert werden.",

    tableDeleteError:
      "Tisch konnte nicht gelöscht werden.",

    tableLoadError:
      "Tische konnten nicht geladen werden.",

    confirmDeleteTable:
      "Möchten Sie diesen Tisch wirklich löschen?",

    tableCapacityError:
      "Die Tischkapazität darf nicht unter den bereits belegten Plätzen liegen.",

    tableFullError:
      "Der Tisch ist voll. Dieser Gast benötigt einen Sitzplatz.",

    guestAssigned:
      "Gast wurde dem Tisch zugewiesen.",

    guestUnassigned:
      "Gast wurde vom Tisch entfernt.",

    assignmentError:
      "Die Zuordnung konnte nicht geändert werden.",

    noUnassignedGuests:
      "Alle teilnehmenden Gäste wurden zugewiesen.",

    infantNoSeat:
      "Baby · kein Sitzplatz",

    seatOccupied:
      "Platz belegt",

    seatsOccupied:
      "Plätze belegt"
  },


  fr: {

    adminLabel: "ADMINISTRATION DE L’ÉVÉNEMENT",
    confirmed: "Confirmé",

    dashboardTitle: "Tableau de bord RSVP",
    loginSubtitle: "Accès réservé aux organisateurs.",

    email: "E-mail",
    password: "Mot de passe",
    login: "Se connecter",
    demoLogin: "🎭 Ouvrir la démo",
    demoNote: "Mode démo · aucun mot de passe requis",
    demoDivider: "ou",
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

    eventPrefix: "Événement",

    guestManagement: "Gestion des invités",
    guestManagementSubtitle: "Ajouter et gérer la liste des invités.",

    addGuest: "+ Ajouter un invité",

    firstName: "Prénom",
    lastName: "Nom",

    guestStatus: "Statut",
    guestType: "Type",

    adult: "Adulte",
    child: "Enfant",
    infant: "Bébé (sans place)",

    notes: "Notes",

    saveGuest: "Enregistrer",
    cancel: "Annuler",

    searchGuests: "Rechercher un invité…",

    actions: "Actions",
    edit: "Modifier",
    delete: "Supprimer",

    noGuests: "Aucun invité ajouté.",

    guestSaved: "Invité enregistré.",
    guestDeleted: "Invité supprimé.",

    guestLoadError: "Impossible de charger les invités.",
    guestSaveError: "Impossible d’enregistrer l’invité.",
    guestDeleteError: "Impossible de supprimer l’invité.",

    confirmDeleteGuest:
      "Voulez-vous vraiment supprimer cet invité ?",

    placeholder: "provisoire",

    guest: "Accompagnateur",

    addToGuests: "+ Ajouter aux invités",
    alreadyGuest: "Déjà dans la liste",

    guestCreatedFromRsvp:
      "Invités ajoutés à la liste.",

    guestGroupCreated:
      "Groupe d’invités créé.",

    rsvpGuestError:
      "Impossible d’ajouter la réponse à la liste des invités.",

    guestSourceRsvp: "Depuis RSVP",

    tableManagement: "Gestion des tables",

    tableManagementSubtitle:
      "Organiser les invités aux tables de la réception.",

    addTable: "+ Ajouter une table",

    tableName: "Nom de la table",
    tableCapacity: "Places",

    saveTable: "Enregistrer la table",

    totalTables: "Tables",
    totalSeats: "Places totales",
    occupiedSeats: "Places occupées",
    freeSeats: "Places disponibles",

    tableEmpty: "Aucun invité assigné.",

    tableFull: "Complet",

    seats: "places",
    seat: "place",

    people: "invités",
    person: "invité",

    assignGuest: "Assigner",
    removeGuestFromTable: "Retirer {name} de la table",

    editTable: "Modifier la table",
    deleteTable: "Supprimer la table",

    unassigned: "Non assignés",

    noTables: "Aucune table créée.",

    tableSaved: "Table enregistrée.",
    tableDeleted: "Table supprimée.",

    tableSaveError:
      "Impossible d’enregistrer la table.",

    tableDeleteError:
      "Impossible de supprimer la table.",

    tableLoadError:
      "Impossible de charger les tables.",

    confirmDeleteTable:
      "Voulez-vous vraiment supprimer cette table ?",

    tableCapacityError:
      "La capacité ne peut pas être inférieure aux places déjà occupées.",

    tableFullError:
      "La table est complète. Cet invité occupe une place.",

    guestAssigned:
      "Invité assigné à la table.",

    guestUnassigned:
      "Invité retiré de la table.",

    assignmentError:
      "Impossible de modifier l’assignation.",

    noUnassignedGuests:
      "Tous les invités participants ont été assignés.",

    infantNoSeat:
      "Bébé · sans place",

    seatOccupied:
      "place occupée",

    seatsOccupied:
      "places occupées"
  },


  es: {

    adminLabel: "ADMINISTRACIÓN DEL EVENTO",
    confirmed: "Confirmado",

    dashboardTitle: "Panel de RSVP",
    loginSubtitle: "Acceso exclusivo para organizadores.",

    email: "Correo electrónico",
    password: "Contraseña",
    login: "Iniciar sesión",
    demoLogin: "🎭 Abrir demo",
    demoNote: "Modo demo · no se requiere contraseña",
    demoDivider: "o",
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

    eventPrefix: "Evento",

    guestManagement: "Gestión de invitados",
    guestManagementSubtitle: "Añade y gestiona la lista de invitados.",

    addGuest: "+ Añadir invitado",

    firstName: "Nombre",
    lastName: "Apellido",

    guestStatus: "Estado",
    guestType: "Tipo",

    adult: "Adulto",
    child: "Niño",
    infant: "Bebé (sin asiento)",

    notes: "Notas",

    saveGuest: "Guardar invitado",
    cancel: "Cancelar",

    searchGuests: "Buscar invitado…",

    actions: "Acciones",
    edit: "Editar",
    delete: "Eliminar",

    noGuests: "No hay invitados añadidos.",

    guestSaved: "Invitado guardado.",
    guestDeleted: "Invitado eliminado.",

    guestLoadError: "No se pueden cargar los invitados.",
    guestSaveError: "No se puede guardar el invitado.",
    guestDeleteError: "No se puede eliminar el invitado.",

    confirmDeleteGuest:
      "¿Quieres eliminar realmente este invitado?",

    placeholder: "provisional",

    guest: "Acompañante",

    addToGuests: "+ Añadir a invitados",
    alreadyGuest: "Ya está en la lista",

    guestCreatedFromRsvp:
      "Invitados añadidos a la lista.",

    guestGroupCreated:
      "Grupo de invitados creado.",

    rsvpGuestError:
      "No se puede añadir la respuesta a la lista de invitados.",

    guestSourceRsvp: "Desde RSVP",

    tableManagement: "Gestión de mesas",

    tableManagementSubtitle:
      "Organiza los invitados en las mesas del banquete.",

    addTable: "+ Añadir mesa",

    tableName: "Nombre de la mesa",
    tableCapacity: "Asientos",

    saveTable: "Guardar mesa",

    totalTables: "Mesas",
    totalSeats: "Asientos totales",
    occupiedSeats: "Asientos ocupados",
    freeSeats: "Asientos disponibles",

    tableEmpty: "Ningún invitado asignado.",

    tableFull: "Completa",

    seats: "asientos",
    seat: "asiento",

    people: "invitados",
    person: "invitado",

    assignGuest: "Asignar",
    removeGuestFromTable: "Quitar a {name} de la mesa",

    editTable: "Editar mesa",
    deleteTable: "Eliminar mesa",

    unassigned: "Sin asignar",

    noTables: "No hay mesas creadas.",

    tableSaved: "Mesa guardada.",
    tableDeleted: "Mesa eliminada.",

    tableSaveError:
      "No se puede guardar la mesa.",

    tableDeleteError:
      "No se puede eliminar la mesa.",

    tableLoadError:
      "No se pueden cargar las mesas.",

    confirmDeleteTable:
      "¿Quieres eliminar realmente esta mesa?",

    tableCapacityError:
      "La capacidad no puede ser inferior a los asientos ya ocupados.",

    tableFullError:
      "La mesa está completa. Este invitado ocupa un asiento.",

    guestAssigned:
      "Invitado asignado a la mesa.",

    guestUnassigned:
      "Invitado retirado de la mesa.",

    assignmentError:
      "No se puede modificar la asignación.",

    noUnassignedGuests:
      "Todos los invitados participantes han sido asignados.",

    infantNoSeat:
      "Bebé · sin asiento",

    seatOccupied:
      "asiento ocupado",

    seatsOccupied:
      "asientos ocupados"
  }

};



/* =========================================================
   DEMO MODE
   ========================================================= */

const DEMO_MODE =
  new URLSearchParams(window.location.search).get("demo") === "true";

const DEMO_STORAGE_KEY = "weddingAdminDemoData_v1";

function createDemoId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getDemoData() {
  try {
    const raw = localStorage.getItem(DEMO_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (
        parsed &&
        Array.isArray(parsed.rsvps) &&
        Array.isArray(parsed.guestGroups) &&
        Array.isArray(parsed.guests) &&
        Array.isArray(parsed.tables)
      ) {
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Demo data non leggibili:", error);
  }

  const now = Date.now();
  const tables = [
    { id: "demo-table-1", event_id: EVENT.id, name: "Tavolo 1", capacity: 8, created_at: new Date(now - 400000).toISOString() },
    { id: "demo-table-2", event_id: EVENT.id, name: "Tavolo 2", capacity: 8, created_at: new Date(now - 300000).toISOString() },
    { id: "demo-table-3", event_id: EVENT.id, name: "Tavolo 3", capacity: 10, created_at: new Date(now - 200000).toISOString() },
    { id: "demo-table-4", event_id: EVENT.id, name: "Tavolo 4", capacity: 10, created_at: new Date(now - 100000).toISOString() }
  ];

  const rsvps = [
    { id: "demo-rsvp-1", name: "Anna Rossi", attending: true, guests: 4, dietary: "Vegetariano", guest_details: null, created_at: new Date(now - 86400000 * 4).toISOString() },
    { id: "demo-rsvp-2", name: "Marco Bianchi", attending: true, guests: 2, dietary: "", guest_details: null, created_at: new Date(now - 86400000 * 3).toISOString() },
    { id: "demo-rsvp-3", name: "Claire Martin", attending: true, guests: 3, dietary: "Gluten free", guest_details: null, created_at: new Date(now - 86400000 * 2).toISOString() },
    { id: "demo-rsvp-4", name: "Thomas Egger", attending: false, guests: 0, dietary: "", guest_details: null, created_at: new Date(now - 86400000).toISOString() },
    { id: "demo-rsvp-5", name: "Sofia Conti", attending: true, guests: 5, dietary: "Allergia frutta secca", guest_details: null, created_at: new Date(now - 3600000).toISOString() }
  ];

  const guests = [
    { id: "demo-g-1", guest_group_id: "demo-group-1", first_name: "Anna", last_name: "Rossi", attending: true, dietary: "Vegetariano", notes: null, table_id: "demo-table-1", is_placeholder: false, guest_type: "adult", source: "rsvp" },
    { id: "demo-g-2", guest_group_id: "demo-group-1", first_name: "Luca", last_name: "Rossi", attending: true, dietary: null, notes: null, table_id: "demo-table-1", is_placeholder: false, guest_type: "adult", source: "rsvp" },
    { id: "demo-g-3", guest_group_id: "demo-group-1", first_name: "Emma", last_name: "Rossi", attending: true, dietary: null, notes: null, table_id: "demo-table-1", is_placeholder: false, guest_type: "child", source: "rsvp" },
    { id: "demo-g-4", guest_group_id: "demo-group-1", first_name: "Leo", last_name: "Rossi", attending: true, dietary: null, notes: null, table_id: "demo-table-1", is_placeholder: false, guest_type: "infant", source: "rsvp" },
    { id: "demo-g-5", guest_group_id: "demo-group-2", first_name: "Marco", last_name: "Bianchi", attending: true, dietary: null, notes: null, table_id: "demo-table-2", is_placeholder: false, guest_type: "adult", source: "rsvp" },
    { id: "demo-g-6", guest_group_id: "demo-group-2", first_name: "Giulia", last_name: "Bianchi", attending: true, dietary: null, notes: null, table_id: "demo-table-2", is_placeholder: false, guest_type: "adult", source: "rsvp" },
    { id: "demo-g-7", guest_group_id: "demo-group-3", first_name: "Claire", last_name: "Martin", attending: true, dietary: "Gluten free", notes: null, table_id: "demo-table-3", is_placeholder: false, guest_type: "adult", source: "rsvp" },
    { id: "demo-g-8", guest_group_id: "demo-group-3", first_name: "Paul", last_name: "Martin", attending: true, dietary: null, notes: null, table_id: "demo-table-3", is_placeholder: false, guest_type: "child", source: "rsvp" },
    { id: "demo-g-9", guest_group_id: "demo-group-3", first_name: "Mia", last_name: "Martin", attending: true, dietary: null, notes: null, table_id: "demo-table-3", is_placeholder: false, guest_type: "infant", source: "rsvp" },
    { id: "demo-g-10", guest_group_id: null, first_name: "Sofia", last_name: "Conti", attending: true, dietary: "Allergia frutta secca", notes: "Arriva direttamente al ricevimento", table_id: null, is_placeholder: false, guest_type: "adult", source: "manual" },
    { id: "demo-g-11", guest_group_id: null, first_name: "Elena", last_name: "Ferrari", attending: true, dietary: null, notes: null, table_id: null, is_placeholder: false, guest_type: "adult", source: "manual" },
    { id: "demo-g-12", guest_group_id: null, first_name: "Matteo", last_name: "Ferrari", attending: true, dietary: null, notes: null, table_id: null, is_placeholder: false, guest_type: "child", source: "manual" }
  ];

  const guestGroups = [
    { id: "demo-group-1", rsvp_id: "demo-rsvp-1", display_name: "Anna Rossi", party_size: 4, attending: true, source: "rsvp" },
    { id: "demo-group-2", rsvp_id: "demo-rsvp-2", display_name: "Marco Bianchi", party_size: 2, attending: true, source: "rsvp" },
    { id: "demo-group-3", rsvp_id: "demo-rsvp-3", display_name: "Claire Martin", party_size: 3, attending: true, source: "rsvp" }
  ];

  const data = { rsvps, guestGroups, guests, tables };
  saveDemoData(data);
  return data;
}

function saveDemoData(data) {
  try {
    localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn("Demo data non salvabili:", error);
  }
}

function loadDemoIntoCache() {
  const data = getDemoData();
  cachedRsvps = data.rsvps || [];
  cachedGuestGroups = data.guestGroups || [];
  cachedGuests = data.guests || [];
  cachedTables = data.tables || [];
}

function persistDemoCache() {
  saveDemoData({
    rsvps: cachedRsvps,
    guestGroups: cachedGuestGroups,
    guests: cachedGuests,
    tables: cachedTables
  });
}


/* =========================================================
   LANGUAGE
   ========================================================= */

let adminLanguage =
  localStorage.getItem("adminLanguage") ||
  localStorage.getItem("eventLanguage") ||
  "it";

if (!ADMIN_TRANSLATIONS[adminLanguage]) {
  adminLanguage = "it";
}


function t(key) {

  return (
    ADMIN_TRANSLATIONS[adminLanguage]?.[key] ||
    ADMIN_TRANSLATIONS.it[key] ||
    key
  );

}


function formatAdminText(key, replacements = {}) {

  let text = t(key);

  Object.entries(replacements).forEach(([placeholder, value]) => {
    text = text.replaceAll(`{${placeholder}}`, String(value ?? ""));
  });

  return text;

}


/* =========================================================
   LANGUAGE APPLICATION
   ========================================================= */

function applyAdminLanguage() {

  document.documentElement.lang = adminLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {

    element.textContent = t(element.dataset.i18n);

  });


  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {

    element.placeholder =
      t(element.dataset.i18nPlaceholder);

  });


  document.querySelectorAll(".language-button").forEach((button) => {

    button.textContent =
      adminLanguage.toUpperCase();

  });


  if (typeof EVENT !== "undefined") {

    const eventDate =
      EVENT.date?.display?.[adminLanguage] ||
      EVENT.date?.display?.it ||
      "";

    eventLabel.textContent =
      `${t("eventPrefix")}: ${EVENT.couple.names} · ${eventDate}`;

  }


  document.title = t("dashboardTitle");

  renderGuests();
  renderTables();

}


/* =========================================================
   LANGUAGE MENU
   ========================================================= */

function closeLanguageMenus() {

  document
    .querySelectorAll(".language-dropdown")
    .forEach((dropdown) => {

      dropdown.classList.add("hidden");

    });


  document
    .querySelectorAll(".language-button")
    .forEach((button) => {

      button.setAttribute("aria-expanded", "false");

    });

}


function setAdminLanguage(lang) {

  if (!ADMIN_TRANSLATIONS[lang]) {
    return;
  }

  adminLanguage = lang;

  localStorage.setItem(
    "adminLanguage",
    lang
  );

  applyAdminLanguage();

  closeLanguageMenus();

}


function setupLanguageMenu(buttonId, dropdownId) {

  const button =
    document.querySelector(`#${buttonId}`);

  const dropdown =
    document.querySelector(`#${dropdownId}`);

  if (!button || !dropdown) {
    return;
  }


  button.addEventListener("click", (event) => {

    event.stopPropagation();

    const willOpen =
      dropdown.classList.contains("hidden");

    closeLanguageMenus();

    if (willOpen) {

      dropdown.classList.remove("hidden");

      button.setAttribute(
        "aria-expanded",
        "true"
      );

    }

  });


  dropdown
    .querySelectorAll("[data-lang]")
    .forEach((item) => {

      item.addEventListener("click", () => {

        setAdminLanguage(
          item.dataset.lang
        );

      });

    });

}


/* =========================================================
   LOGIN / DASHBOARD
   ========================================================= */

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


/* =========================================================
   RSVP LOADING
   ========================================================= */

async function loadRsvps() {

  if (dashboardView.classList.contains("hidden")) {
    return;
  }

  showMessage(dashboardMessage, t("loading"));

  if (DEMO_MODE) {
    loadDemoIntoCache();
  } else {
    const [rsvpResult, groupResult, guestResult, tableResult] = await Promise.all([
      supabaseClient.from("rsvps").select("id,name,attending,guests,dietary,guest_details,created_at").eq("event_id", EVENT.id).order("created_at", { ascending: false }),
      supabaseClient.from("guest_groups").select("id,rsvp_id,display_name,party_size,attending,source").eq("event_id", EVENT.id),
      supabaseClient.from("guests").select("id,guest_group_id,first_name,last_name,attending,dietary,notes,table_id,is_placeholder,guest_type,source").eq("event_id", EVENT.id).order("created_at", { ascending: true }),
      supabaseClient.from("wedding_tables").select("id,event_id,name,capacity,created_at").eq("event_id", EVENT.id).order("created_at", { ascending: true })
    ]);

    if (rsvpResult.error) {
      console.error(rsvpResult.error);
      showMessage(dashboardMessage, t("loadError"), "error");
      return;
    }

    cachedRsvps = rsvpResult.data || [];
    cachedGuestGroups = groupResult.error ? [] : (groupResult.data || []);
    cachedGuests = guestResult.error ? [] : (guestResult.data || []);
    cachedTables = tableResult.error ? [] : (tableResult.data || []);

    if (groupResult.error) showMessage(guestMessage, t("guestLoadError"), "error");
    if (guestResult.error) showMessage(guestMessage, t("guestLoadError"), "error");
    if (tableResult.error) showMessage(tableMessage, t("tableLoadError"), "error");
  }

  const rows = cachedRsvps;
  totalResponses.textContent = rows.length;
  attendingCount.textContent = rows.filter(row => row.attending).reduce((sum, row) => sum + Number(row.guests || 0), 0);
  notAttendingCount.textContent = rows.filter(row => !row.attending).length;
  dietaryCount.textContent = rows.filter(row => row.dietary && row.dietary.trim()).length;

  rsvpRows.innerHTML = rows.map(row => {
    const date = new Date(row.created_at).toLocaleString(adminLanguage === "it" ? "it-IT" : adminLanguage, { dateStyle: "short", timeStyle: "short" });
    const existingGroup = cachedGuestGroups.find(group => group.rsvp_id === row.id);
    const action = existingGroup
      ? `<span class="badge guest-added">${t("alreadyGuest")}</span>`
      : row.attending
        ? `<button type="button" class="table-action add-rsvp" data-rsvp-id="${escapeHtml(row.id)}">${t("addToGuests")}</button>`
        : `<span class="muted">—</span>`;

    return `<tr>
      <td>${escapeHtml(row.name)}</td>
      <td><span class="badge ${row.attending ? "yes" : "no"}">${row.attending ? t("yes") : t("no")}</span></td>
      <td>${Number(row.guests || 0)}</td>
      <td>${escapeHtml(row.dietary || "—")}</td>
      <td>${date}</td>
      <td class="action-cell">${action}</td>
    </tr>`;
  }).join("");

  if (!rows.length) {
    rsvpRows.innerHTML = `<tr><td colspan="6">${t("noResponses")}</td></tr>`;
  }

  renderGuests();
  renderTables();

  showMessage(dashboardMessage, rows.length ? "" : t("noResponses"));

}


/* =========================================================
   RSVP → GUESTS
   ========================================================= */

async function addRsvpToGuests(rsvpId) {

  const rsvp =
    cachedRsvps.find(
      row => row.id === rsvpId
    );


  if (!rsvp || !rsvp.attending) {
    return;
  }


  const existingGroup =
    cachedGuestGroups.find(
      group =>
        group.rsvp_id === rsvp.id
    );


  if (existingGroup) {
    return;
  }

  if (DEMO_MODE) {
    const partySize = Math.max(Number(rsvp.guests || 1), 1);
    const group = {
      id: createDemoId("demo-group"),
      rsvp_id: rsvp.id,
      display_name: rsvp.name,
      party_size: partySize,
      attending: true,
      source: "rsvp"
    };

    const parts = String(rsvp.name || "Guest").trim().split(/\s+/).filter(Boolean);
    cachedGuestGroups.push(group);

    for (let i = 0; i < partySize; i += 1) {
      cachedGuests.push({
        id: createDemoId("demo-guest"),
        guest_group_id: group.id,
        first_name: i === 0 ? (parts.shift() || rsvp.name) : `${t("guest")} ${i + 1}`,
        last_name: i === 0 && parts.length ? parts.join(" ") : null,
        attending: true,
        dietary: i === 0 ? (rsvp.dietary || null) : null,
        notes: null,
        table_id: null,
        is_placeholder: i > 0,
        guest_type: "adult",
        source: "rsvp"
      });
    }

    persistDemoCache();
    showMessage(guestMessage, t("guestCreatedFromRsvp"));
    await loadRsvps();
    return;
  }


  showMessage(
    guestMessage,
    t("loading")
  );


  const details =
    Array.isArray(rsvp.guest_details) &&
    rsvp.guest_details.length
      ? rsvp.guest_details
      : null;


  const partySize =
    Math.max(
      Number(
        rsvp.guests ||
        (details
          ? details.length
          : 1)
      ),
      1
    );


  const {
    data: group,
    error: groupError
  } = await supabaseClient
    .from("guest_groups")
    .insert({
      event_id: EVENT.id,
      rsvp_id: rsvp.id,
      display_name: rsvp.name,
      attending: true,
      party_size: partySize,
      source: "rsvp"
    })
    .select("id")
    .single();


  if (groupError) {

    console.error(groupError);

    showMessage(
      guestMessage,
      t("rsvpGuestError"),
      "error"
    );

    return;

  }


  const splitName = (fullName) => {

    const parts =
      String(fullName || "")
        .trim()
        .split(/\s+/)
        .filter(Boolean);


    return {

      first_name:
        parts.shift() ||
        String(fullName || "").trim(),

      last_name:
        parts.length
          ? parts.join(" ")
          : null

    };

  };


  const normalizeType = (value) => {

    return [
      "adult",
      "child",
      "infant"
    ].includes(value)
      ? value
      : "adult";

  };


  const formatDietary = (person) => {

    const values =
      Array.isArray(person?.dietary)
        ? person.dietary
        : [];


    const detailsText =
      String(
        person?.dietary_details || ""
      ).trim();


    return [
      ...values,
      detailsText
    ]
      .filter(Boolean)
      .join(" | ") || null;

  };


  let guestsToCreate;


  /* -------------------------------------------------------
     RSVP WITH DETAILS
     ------------------------------------------------------- */

  if (details) {

    guestsToCreate =
      details
        .slice(0, partySize)
        .map((person, index) => {

          const name =
            splitName(
              person.first_name ||
              (
                index === 0
                  ? rsvp.name
                  : `${t("guest")} ${index}`
              )
            );


          return {

            event_id: EVENT.id,

            guest_group_id:
              group.id,

            first_name:
              name.first_name,

            last_name:
              name.last_name,

            attending: true,

            dietary:
              formatDietary(person),

            notes: null,

            source: "rsvp",

            is_placeholder: false,

            guest_type:
              normalizeType(
                person.guest_type
              )

          };

        });

  }


  /* -------------------------------------------------------
     RSVP WITHOUT DETAILS
     ------------------------------------------------------- */

  else {

    const parts =
      splitName(rsvp.name);


    guestsToCreate = [

      {

        event_id: EVENT.id,

        guest_group_id:
          group.id,

        first_name:
          parts.first_name,

        last_name:
          parts.last_name,

        attending: true,

        dietary:
          rsvp.dietary || null,

        notes: null,

        source: "rsvp",

        is_placeholder: false,

        guest_type: "adult"

      }

    ];


    for (
      let i = 2;
      i <= partySize;
      i += 1
    ) {

      guestsToCreate.push({

        event_id: EVENT.id,

        guest_group_id:
          group.id,

        first_name:
          `${t("guest")} ${i - 1}`,

        last_name: null,

        attending: true,

        dietary: null,

        notes: null,

        source: "rsvp",

        is_placeholder: true,

        guest_type: "adult"

      });

    }

  }


  const {
    error: guestsError
  } = await supabaseClient
    .from("guests")
    .insert(
      guestsToCreate
    );


  if (guestsError) {

    console.error(guestsError);

    await supabaseClient
      .from("guest_groups")
      .delete()
      .eq("id", group.id);


    showMessage(
      guestMessage,
      t("rsvpGuestError"),
      "error"
    );

    return;

  }


  showMessage(
    guestMessage,
    t("guestCreatedFromRsvp")
  );


  await loadRsvps();

}


/* =========================================================
   GUEST RENDERING
   ========================================================= */

function renderGuests() {

  if (!guestRows) {
    return;
  }


  const query =
    (
      guestSearch?.value ||
      ""
    )
      .trim()
      .toLowerCase();


  const filtered =
    cachedGuests.filter(
      guest => {

        const fullName =
          `${guest.first_name || ""} ${guest.last_name || ""}`
            .toLowerCase();


        return (
          !query ||

          fullName.includes(query) ||

          String(
            guest.dietary || ""
          )
            .toLowerCase()
            .includes(query)
        );

      }
    );


  guestCountLabel.textContent =
    `${filtered.length} / ${cachedGuests.length}`;


  guestRows.innerHTML =
    filtered
      .map(guest => {

        const fullName =
          `${guest.first_name || ""} ${guest.last_name || ""}`
            .trim();


        const typeLabel =
          guest.guest_type === "infant"
            ? t("infant")
            : guest.guest_type === "child"
              ? t("child")
              : t("adult");


        const table =
          cachedTables.find(
            table =>
              table.id === guest.table_id
          );


        const tableLabel =
          table
            ? escapeHtml(table.name)
            : "";


        return `

          <tr>

            <td>
              ${escapeHtml(fullName)}

              ${
                guest.is_placeholder
                  ? `
                    <span class="placeholder-label">
                      (${t("placeholder")})
                    </span>
                  `
                  : ""
              }

            </td>


            <td>
              ${typeLabel}
            </td>


            <td>

              <span class="badge ${guest.attending ? "yes" : "no"}">

                ${
                  guest.attending
                    ? t("yes")
                    : t("no")
                }

              </span>

            </td>


            <td>
              ${escapeHtml(
                guest.dietary || "—"
              )}
            </td>


            <td>
              ${escapeHtml(
                guest.notes || "—"
              )}
            </td>


            <td class="action-cell">

              ${
                table
                  ? `
                    <span class="badge guest-added">
                      ${tableLabel}
                    </span>
                  `
                  : ""
              }

              <button
                type="button"
                class="table-action"
                data-edit-guest="${escapeHtml(guest.id)}"
              >
                ${t("edit")}
              </button>

              <button
                type="button"
                class="table-action danger"
                data-delete-guest="${escapeHtml(guest.id)}"
              >
                ${t("delete")}
              </button>

            </td>

          </tr>

        `;

      })
      .join("");


  if (!filtered.length) {

    guestRows.innerHTML = `
      <tr>
        <td colspan="6">
          ${t("noGuests")}
        </td>
      </tr>
    `;

  }

}


/* =========================================================
   GUEST FORM
   ========================================================= */

function openGuestForm(guest = null) {

  guestForm.classList.remove(
    "hidden"
  );


  guestForm.reset();


  guestId.value =
    guest?.id || "";


  guestFirstName.value =
    guest?.first_name || "";


  guestLastName.value =
    guest?.last_name || "";


  guestAttending.value =
    String(
      guest?.attending !== false
    );


  guestType.value =
    guest?.guest_type || "adult";


  guestDietary.value =
    guest?.dietary || "";


  guestNotes.value =
    guest?.notes || "";


  showMessage(
    guestFormMessage,
    ""
  );


  guestFirstName.focus();

}


function closeGuestForm() {

  guestForm.classList.add(
    "hidden"
  );


  guestForm.reset();

  guestId.value = "";

  showMessage(
    guestFormMessage,
    ""
  );

}


/* =========================================================
   SAVE GUEST
   ========================================================= */

async function saveGuest(event) {

  event.preventDefault();


  const normalizedType =
    [
      "adult",
      "child",
      "infant"
    ].includes(guestType.value)
      ? guestType.value
      : "adult";


  const payload = {

    event_id:
      EVENT.id,

    first_name:
      guestFirstName.value.trim(),

    last_name:
      guestLastName.value.trim() ||
      null,

    attending:
      guestAttending.value === "true",

    guest_type:
      normalizedType,

    dietary:
      guestDietary.value.trim() ||
      null,

    notes:
      guestNotes.value.trim() ||
      null,

    source:
      "manual"

  };


  if (!payload.first_name) {
    return;
  }

  if (DEMO_MODE) {
    if (guestId.value) {
      const guest = cachedGuests.find(item => item.id === guestId.value);
      if (guest) Object.assign(guest, payload);
    } else {
      cachedGuests.push({
        ...payload,
        id: createDemoId("demo-guest"),
        guest_group_id: null,
        table_id: null,
        is_placeholder: false
      });
    }
    persistDemoCache();
    closeGuestForm();
    showMessage(guestMessage, t("guestSaved"));
    await loadRsvps();
    return;
  }


  showMessage(
    guestFormMessage,
    t("loading")
  );


  let result;


  if (guestId.value) {

    result =
      await supabaseClient
        .from("guests")
        .update(payload)
        .eq("id", guestId.value)
        .eq("event_id", EVENT.id);

  }

  else {

    result =
      await supabaseClient
        .from("guests")
        .insert(payload);

  }


  if (result.error) {

    console.error(result.error);

    showMessage(
      guestFormMessage,
      t("guestSaveError"),
      "error"
    );

    return;

  }


  closeGuestForm();


  showMessage(
    guestMessage,
    t("guestSaved")
  );


  await loadRsvps();

}


/* =========================================================
   DELETE GUEST
   ========================================================= */

async function deleteGuest(id) {

  if (
    !confirm(
      t("confirmDeleteGuest")
    )
  ) {
    return;
  }

  if (DEMO_MODE) {
    cachedGuests = cachedGuests.filter(item => item.id !== id);
    persistDemoCache();
    showMessage(guestMessage, t("guestDeleted"));
    await loadRsvps();
    return;
  }


  const {
    error
  } = await supabaseClient
    .from("guests")
    .delete()
    .eq("id", id)
    .eq("event_id", EVENT.id);


  if (error) {

    console.error(error);

    showMessage(
      guestMessage,
      t("guestDeleteError"),
      "error"
    );

    return;

  }


  showMessage(
    guestMessage,
    t("guestDeleted")
  );


  await loadRsvps();

}


/* =========================================================
   TABLE HELPERS
   ========================================================= */

/*
  Adulto = 1 posto
  Bambino = 1 posto
  Neonato = 0 posti
*/

function guestUsesSeat(guest) {

  return (
    guest?.guest_type === "adult" ||
    guest?.guest_type === "child"
  );

}


function getTableGuests(tableId) {

  return cachedGuests.filter(
    guest =>
      guest.table_id === tableId &&
      guest.attending !== false
  );

}


function getTableOccupiedSeats(tableId) {

  return getTableGuests(tableId)
    .filter(guestUsesSeat)
    .length;

}


function getTablePeopleCount(tableId) {

  return getTableGuests(tableId).length;

}


function getTableInfantCount(tableId) {

  return getTableGuests(tableId).filter(guest => guest?.guest_type === "infant").length;

}


function getUnassignedGuests() {

  return cachedGuests.filter(
    guest =>
      guest.attending !== false &&
      !guest.table_id
  );

}


/* =========================================================
   TABLE FORM
   ========================================================= */

function openTableForm(table = null) {

  tableForm.classList.remove(
    "hidden"
  );


  tableForm.reset();


  tableId.value =
    table?.id || "";


  tableName.value =
    table?.name || "";


  tableCapacity.value =
    table?.capacity || 10;


  showMessage(
    tableFormMessage,
    ""
  );


  tableName.focus();

}


function closeTableForm() {

  tableForm.classList.add(
    "hidden"
  );


  tableForm.reset();

  tableId.value = "";

  showMessage(
    tableFormMessage,
    ""
  );

}


/* =========================================================
   SAVE TABLE
   ========================================================= */

async function saveTable(event) {

  event.preventDefault();


  const name =
    tableName.value.trim();


  const capacity =
    Number(
      tableCapacity.value
    );


  if (!name || !Number.isInteger(capacity) || capacity < 1) {
    return;
  }


  /*
    If editing an existing table,
    make sure its capacity does not become
    smaller than its current occupancy.
  */

  if (DEMO_MODE) {
    if (tableId.value) {
      const table = cachedTables.find(item => item.id === tableId.value);
      if (table) {
        const occupied = getTableOccupiedSeats(table.id);
        if (capacity < occupied) {
          showMessage(tableFormMessage, t("tableCapacityError"), "error");
          return;
        }
        table.name = name;
        table.capacity = capacity;
      }
    } else {
      cachedTables.push({
        id: createDemoId("demo-table"),
        event_id: EVENT.id,
        name,
        capacity,
        created_at: new Date().toISOString()
      });
    }
    persistDemoCache();
    closeTableForm();
    showMessage(tableMessage, t("tableSaved"));
    await loadRsvps();
    return;
  }


  if (tableId.value) {

    const occupied =
      getTableOccupiedSeats(
        tableId.value
      );


    if (capacity < occupied) {

      showMessage(
        tableFormMessage,
        t("tableCapacityError"),
        "error"
      );

      return;

    }

  }


  const payload = {

    event_id:
      EVENT.id,

    name,

    capacity

  };


  showMessage(
    tableFormMessage,
    t("loading")
  );


  let result;


  if (tableId.value) {

    result =
      await supabaseClient
        .from("wedding_tables")
        .update({
          name: payload.name,
          capacity: payload.capacity
        })
        .eq("id", tableId.value)
        .eq("event_id", EVENT.id);

  }

  else {

    result =
      await supabaseClient
        .from("wedding_tables")
        .insert(payload);

  }


  if (result.error) {

    console.error(result.error);

    showMessage(
      tableFormMessage,
      t("tableSaveError"),
      "error"
    );

    return;

  }


  closeTableForm();


  showMessage(
    tableMessage,
    t("tableSaved")
  );


  await loadRsvps();

}


/* =========================================================
   DELETE TABLE
   ========================================================= */

async function deleteTable(id) {

  const table =
    cachedTables.find(
      item => item.id === id
    );


  if (!table) {
    return;
  }


  if (
    !confirm(
      t("confirmDeleteTable")
    )
  ) {
    return;
  }

  if (DEMO_MODE) {
    cachedGuests.forEach(guest => {
      if (guest.table_id === id) guest.table_id = null;
    });
    cachedTables = cachedTables.filter(item => item.id !== id);
    persistDemoCache();
    showMessage(tableMessage, t("tableDeleted"));
    await loadRsvps();
    return;
  }


  /*
    First remove table assignment
    from all guests sitting there.
  */

  const guestsAtTable =
    cachedGuests.filter(
      guest =>
        guest.table_id === id
    );


  if (guestsAtTable.length) {

    const {
      error: updateError
    } = await supabaseClient
      .from("guests")
      .update({
        table_id: null
      })
      .eq("table_id", id)
      .eq("event_id", EVENT.id);


    if (updateError) {

      console.error(updateError);

      showMessage(
        tableMessage,
        t("tableDeleteError"),
        "error"
      );

      return;

    }

  }


  const {
    error
  } = await supabaseClient
    .from("wedding_tables")
    .delete()
    .eq("id", id)
    .eq("event_id", EVENT.id);


  if (error) {

    console.error(error);

    showMessage(
      tableMessage,
      t("tableDeleteError"),
      "error"
    );

    return;

  }


  showMessage(
    tableMessage,
    t("tableDeleted")
  );


  await loadRsvps();

}


/* =========================================================
   ASSIGN GUEST TO TABLE
   ========================================================= */

async function assignGuestToTable(
  guestIdValue,
  tableIdValue
) {

  const guest =
    cachedGuests.find(
      item =>
        item.id === guestIdValue
    );


  const table =
    cachedTables.find(
      item =>
        item.id === tableIdValue
    );


  if (!guest || !table) {
    return;
  }


  /*
    Already assigned to this table.
  */

  if (
    guest.table_id === table.id
  ) {
    return;
  }


  /*
    Only adults and children consume seats.
    Infants can always be assigned.
  */

  if (guestUsesSeat(guest)) {

    const occupied =
      getTableOccupiedSeats(
        table.id
      );


    if (occupied >= table.capacity) {

      showMessage(
        tableMessage,
        t("tableFullError"),
        "error"
      );

      return;

    }

  }


  if (DEMO_MODE) {
    guest.table_id = table.id;
    persistDemoCache();
    showMessage(tableMessage, t("guestAssigned"));
    await loadRsvps();
    return;
  }


  const {
    error
  } = await supabaseClient
    .from("guests")
    .update({
      table_id: table.id
    })
    .eq("id", guest.id)
    .eq("event_id", EVENT.id);


  if (error) {

    console.error(error);

    showMessage(
      tableMessage,
      t("assignmentError"),
      "error"
    );

    return;

  }


  showMessage(
    tableMessage,
    t("guestAssigned")
  );


  await loadRsvps();

}


/* =========================================================
   REMOVE GUEST FROM TABLE
   ========================================================= */

async function removeGuestFromTable(
  guestIdValue
) {

  const guest =
    cachedGuests.find(
      item =>
        item.id === guestIdValue
    );


  if (!guest) {
    return;
  }


  if (DEMO_MODE) {
    guest.table_id = null;
    persistDemoCache();
    showMessage(tableMessage, t("guestUnassigned"));
    await loadRsvps();
    return;
  }


  const {
    error
  } = await supabaseClient
    .from("guests")
    .update({
      table_id: null
    })
    .eq("id", guest.id)
    .eq("event_id", EVENT.id);


  if (error) {

    console.error(error);

    showMessage(
      tableMessage,
      t("assignmentError"),
      "error"
    );

    return;

  }


  showMessage(
    tableMessage,
    t("guestUnassigned")
  );


  await loadRsvps();

}


/* =========================================================
   TABLE RENDERING
   ========================================================= */

function renderTables() {

  if (!tableCards) {
    return;
  }


  /* -------------------------------------------------------
     OVERVIEW
     ------------------------------------------------------- */

  const tablesCount =
    cachedTables.length;


  const seatsCount =
    cachedTables.reduce(
      (sum, table) =>
        sum + Number(table.capacity || 0),
      0
    );


  const occupiedCount =
    cachedTables.reduce(
      (sum, table) =>
        sum +
        getTableOccupiedSeats(table.id),
      0
    );


  const freeCount =
    Math.max(
      seatsCount - occupiedCount,
      0
    );


  totalTables.textContent =
    tablesCount;


  totalSeats.textContent =
    seatsCount;


  occupiedSeats.textContent =
    occupiedCount;


  freeSeats.textContent =
    freeCount;


  /* -------------------------------------------------------
     EMPTY STATE
     ------------------------------------------------------- */

  if (!cachedTables.length) {

    tableCards.innerHTML = `
      <div class="table-card">

        <div class="table-card-empty">
          ${t("noTables")}
        </div>

      </div>
    `;

    return;

  }


  /* -------------------------------------------------------
     TABLE CARDS
     ------------------------------------------------------- */

  tableCards.innerHTML =
    cachedTables
      .map(table => {

        const guests =
          getTableGuests(table.id);


        const occupied =
          getTableOccupiedSeats(table.id);


        const people =
          getTablePeopleCount(table.id);


        const capacity =
          Number(table.capacity || 0);


        const isFull =
          occupied >= capacity;


        const percentage =
          capacity > 0
            ? Math.min(
                (occupied / capacity) * 100,
                100
              )
            : 0;


        const occupancyLabel =
          `${occupied}/${capacity}`;


        return `

          <article
            class="table-card ${isFull ? "is-full" : ""}"
            data-table-card="${escapeHtml(table.id)}"
          >

            <!-- HEADER -->

            <div class="table-card-header">

              <div>

                <h3 class="table-card-title">
                  ${escapeHtml(table.name)}
                </h3>

                <div class="table-card-capacity">

                  ${people}
                  ${
                    people === 1
                      ? t("person")
                      : t("people")
                  }

                  ·

                  ${capacity}
                  ${
                    capacity === 1
                      ? t("seat")
                      : t("seats")
                  }

                </div>

              </div>


              ${
                isFull
                  ? `
                    <span class="badge guest-added">
                      ${t("tableFull")}
                    </span>
                  `
                  : ""
              }

            </div>


            <!-- OCCUPANCY -->

            <div class="table-card-occupancy">

              <div class="table-card-occupancy-label">

                <span>
                  ${t("seatsOccupied")}
                </span>

                <strong>
                  ${occupancyLabel}
                </strong>

              </div>


              <div class="table-card-progress">

                <div
                  class="table-card-progress-bar"
                  style="width:${percentage}%"
                ></div>

              </div>

            </div>


            <!-- GUESTS -->

            ${
              guests.length

                ? `

                  <ul class="table-card-guests">

                    ${guests
                      .map(guest => {

                        const guestName =
                          `${guest.first_name || ""} ${guest.last_name || ""}`
                            .trim();


                        const isInfant =
                          guest.guest_type === "infant";


                        return `

                          <li class="table-card-guest">

                            <span class="table-card-guest-name">

                              ${escapeHtml(
                                guestName
                              )}

                            </span>


                            <span class="table-card-guest-type">

                              ${
                                isInfant
                                  ? t("infantNoSeat")
                                  : guest.guest_type === "child"
                                    ? t("child")
                                    : t("adult")
                              }

                            </span>

                          </li>

                        `;

                      })
                      .join("")}

                  </ul>

                `

                : `

                  <div class="table-card-empty">
                    ${t("tableEmpty")}
                  </div>

                `
            }


            <!-- ACTIONS -->

            <div class="table-card-actions">

              <button
                type="button"
                data-edit-table="${escapeHtml(table.id)}"
              >
                ${t("editTable")}
              </button>


              <button
                type="button"
                class="danger"
                data-delete-table="${escapeHtml(table.id)}"
              >
                ${t("deleteTable")}
              </button>


              ${
                guests.length

                  ? guests
                      .map(guest => {
                        const guestName =
                          `${guest.first_name || ""} ${guest.last_name || ""}`
                            .trim();

                        return `

                          <button
                            type="button"
                            data-remove-guest="${escapeHtml(guest.id)}"
                          >
                            ${escapeHtml(formatAdminText("removeGuestFromTable", { name: guestName }))}
                          </button>

                        `;
                      })
                      .join("")

                  : ""
              }

            </div>


            <!-- ASSIGN GUEST -->

            ${renderGuestAssignment(table)}

          </article>

        `;

      })
      .join("");

}


/* =========================================================
   ASSIGNMENT SELECT
   ========================================================= */

function renderGuestAssignment(table) {

  const unassigned =
    getUnassignedGuests();


  /*
    If there are no unassigned guests,
    show a small informational message.
  */

  if (!unassigned.length) {

    return `

      <div class="table-card-empty">

        ${t("noUnassignedGuests")}

      </div>

    `;

  }


  return `

    <div class="table-card-actions">

      <select
        class="table-guest-select"
        data-assign-table="${escapeHtml(table.id)}"
        aria-label="${escapeHtml(t("assignGuest"))}"
      >

        <option value="">
          ${t("assignGuest")}
        </option>

        ${
          unassigned
            .map(guest => {

              const guestName =
                `${guest.first_name || ""} ${guest.last_name || ""}`
                  .trim();


              const needsSeat =
                guestUsesSeat(guest);


              const occupied =
                getTableOccupiedSeats(
                  table.id
                );


              const isFull =
                occupied >=
                Number(table.capacity || 0);


              /*
                Infants can still be selected
                even if the table is full.
              */

              const disabled =
                isFull &&
                needsSeat;


              return `

                <option
                  value="${escapeHtml(guest.id)}"
                  ${disabled ? "disabled" : ""}
                >

                  ${escapeHtml(guestName)}

                  ·

                  ${
                    guest.guest_type === "infant"
                      ? t("infantNoSeat")
                      : guest.guest_type === "child"
                        ? t("child")
                        : t("adult")
                  }

                  ${
                    disabled
                      ? ` · ${t("tableFull")}`
                      : ""
                  }

                </option>

              `;

            })
            .join("")
        }

      </select>

    </div>

  `;

}


/* =========================================================
   TABLE EVENT HANDLERS
   ========================================================= */

tableCards.addEventListener(
  "click",
  async (event) => {

    const editTableButton =
      event.target.closest(
        "[data-edit-table]"
      );


    const deleteTableButton =
      event.target.closest(
        "[data-delete-table]"
      );


    const removeGuestButton =
      event.target.closest(
        "[data-remove-guest]"
      );


    if (editTableButton) {

      const table =
        cachedTables.find(
          item =>
            item.id ===
            editTableButton.dataset.editTable
        );


      if (table) {
        openTableForm(table);
      }

      return;

    }


    if (deleteTableButton) {

      await deleteTable(
        deleteTableButton.dataset.deleteTable
      );

      return;

    }


    if (removeGuestButton) {

      await removeGuestFromTable(
        removeGuestButton.dataset.removeGuest
      );

    }

  }
);


/* =========================================================
   TABLE SELECT ASSIGNMENT
   ========================================================= */

tableCards.addEventListener(
  "change",
  async (event) => {

    const select =
      event.target.closest(
        "[data-assign-table]"
      );


    if (!select) {
      return;
    }


    const tableIdValue =
      select.dataset.assignTable;


    const guestIdValue =
      select.value;


    if (!guestIdValue) {
      return;
    }


    /*
      Reset select visually.
    */

    select.value = "";


    await assignGuestToTable(
      guestIdValue,
      tableIdValue
    );

  }
);


/* =========================================================
   TABLE BUTTONS
   ========================================================= */

if (addTableButton) {

  addTableButton.addEventListener(
    "click",
    () => {

      openTableForm();

    }
  );

}


if (cancelTableButton) {

  cancelTableButton.addEventListener(
    "click",
    closeTableForm
  );

}


if (tableForm) {

  tableForm.addEventListener(
    "submit",
    saveTable
  );

}


/* =========================================================
   GENERAL HELPERS
   ========================================================= */

function showMessage(
  element,
  text,
  type = ""
) {

  if (!element) {
    return;
  }


  element.textContent =
    text;


  element.className =
    `message ${type}`.trim();

}


function escapeHtml(value) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}


/* =========================================================
   DEMO LOGIN
   ========================================================= */

if (demoLoginButton) {
  demoLoginButton.addEventListener("click", async () => {
    if (!DEMO_MODE) {
      window.location.href = "admin.html?demo=true";
      return;
    }

    showMessage(loginMessage, t("loading"));
    showDashboard();
    loadDemoIntoCache();
    await loadRsvps();
  });
}


/* =========================================================
   LOGIN
   ========================================================= */

loginForm.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();


    const email =
      document
        .querySelector("#email")
        .value
        .trim();


    const password =
      document
        .querySelector("#password")
        .value;


    showMessage(
      loginMessage,
      t("loading")
    );


    const {
      error
    } =
      await supabaseClient.auth
        .signInWithPassword({
          email,
          password
        });


    if (error) {

      console.error(error);

      showMessage(
        loginMessage,
        t("loginError"),
        "error"
      );

      return;

    }


    loginForm.reset();

    showDashboard();

    await loadRsvps();

  }
);


/* =========================================================
   LOGOUT
   ========================================================= */

document
  .querySelector("#logoutButton")
  .addEventListener(
    "click",
    async () => {

      if (!DEMO_MODE) {
        await supabaseClient.auth.signOut();
      }

      showLogin();

    }
  );


/* =========================================================
   REFRESH
   ========================================================= */

document
  .querySelector("#refreshButton")
  .addEventListener(
    "click",
    loadRsvps
  );


/* =========================================================
   GUEST BUTTONS
   ========================================================= */

document
  .querySelector("#addGuestButton")
  .addEventListener(
    "click",
    () => {

      openGuestForm();

    }
  );


document
  .querySelector("#cancelGuestButton")
  .addEventListener(
    "click",
    closeGuestForm
  );


guestForm.addEventListener(
  "submit",
  saveGuest
);


guestSearch.addEventListener(
  "input",
  renderGuests
);


/* =========================================================
   RSVP ACTIONS
   ========================================================= */

rsvpRows.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "[data-rsvp-id]"
      );


    if (button) {

      addRsvpToGuests(
        button.dataset.rsvpId
      );

    }

  }
);


/* =========================================================
   GUEST ACTIONS
   ========================================================= */

guestRows.addEventListener(
  "click",
  event => {

    const editButton =
      event.target.closest(
        "[data-edit-guest]"
      );


    const deleteButton =
      event.target.closest(
        "[data-delete-guest]"
      );


    if (editButton) {

      const guest =
        cachedGuests.find(
          item =>
            item.id ===
            editButton.dataset.editGuest
        );


      if (guest) {

        openGuestForm(
          guest
        );

      }

    }


    if (deleteButton) {

      deleteGuest(
        deleteButton.dataset.deleteGuest
      );

    }

  }
);


/* =========================================================
   LANGUAGE
   ========================================================= */

setupLanguageMenu(
  "languageButton",
  "languageDropdown"
);


setupLanguageMenu(
  "dashboardLanguageButton",
  "dashboardLanguageDropdown"
);


document.addEventListener(
  "click",
  closeLanguageMenus
);


/* =========================================================
   AUTH STATE
   ========================================================= */

supabaseClient.auth.onAuthStateChange(
  async (_event, session) => {

    if (DEMO_MODE) {
      return;
    }

    if (session) {

      showDashboard();

      await loadRsvps();

    }

    else {

      showLogin();

    }

  }
);


/* =========================================================
   INITIALIZATION
   ========================================================= */

applyAdminLanguage();