document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginView = document.getElementById("loginView");
  const dashboardView = document.getElementById("dashboardView");
  const logoutButton = document.getElementById("logoutButton");
  const refreshButton = document.getElementById("refreshButton");
  const rsvpRows = document.getElementById("rsvpRows");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        
        loginView.classList.add("hidden");
        dashboardView.classList.remove("hidden");
        loadDashboardData();
      } catch (err) {
        document.getElementById("loginMessage").textContent = "Credenziali non valide.";
      }
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
      await supabaseClient.auth.signOut();
      dashboardView.classList.add("hidden");
      loginView.classList.remove("hidden");
    });
  }

  if (refreshButton) {
    refreshButton.addEventListener("click", loadDashboardData);
  }

  async function loadDashboardData() {
    try {
      const { data, error } = await supabaseClient.from("rsvps").select("*").order("created_at", { ascending: false });
      if (error) throw error;

      let total = data.length;
      let attending = 0;
      let notAttending = 0;
      let dietary = 0;

      rsvpRows.innerHTML = "";
      data.forEach(item => {
        if (item.attending) attending += item.guests;
        else notAttending += 1;
        if (item.dietary) dietary += 1;

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${item.name}</td>
          <td>${item.attending ? "Sì" : "No"}</td>
          <td>${item.guests}</td>
          <td>${item.dietary || "-"}</td>
          <td>${new Date(item.created_at).toLocaleDateString()}</td>
        `;
        rsvpRows.appendChild(tr);
      });

      document.getElementById("totalResponses").textContent = total;
      document.getElementById("attendingCount").textContent = attending;
      document.getElementById("notAttendingCount").textContent = notAttending;
      document.getElementById("dietaryCount").textContent = dietary;
    } catch (err) {
      console.error("Errore nel caricamento dei dati:", err);
    }
  }
});