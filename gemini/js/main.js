document.addEventListener("DOMContentLoaded", () => {
  const openSeal = document.getElementById("openInvitationSeal");
  const opening = document.getElementById("opening");
  const site = document.getElementById("site");

  if (openSeal) {
    openSeal.addEventListener("click", () => {
      opening.style.opacity = "0";
      setTimeout(() => {
        opening.classList.add("hidden");
        site.classList.remove("hidden");
      }, 600);
    });
  } else {
    // Se per qualsiasi motivo il bottone non c'è, mostra subito il sito
    if (site) site.classList.remove("hidden");
  }
});