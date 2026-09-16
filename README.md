# Wedding Invitation Template

Template HTML/CSS/JavaScript vanilla per un invito digitale elegante e riutilizzabile.

## Struttura

- `index.html` — struttura della pagina
- `css/style.css` — grafica e responsive design
- `js/event-config.js` — dati modificabili dell'evento
- `js/translations.js` — Italiano, English, Deutsch, Français, Español
- `js/main.js` — animazioni, countdown, menu, RSVP demo, galleria, musica
- `assets/images/` — immagini
- `assets/audio/` — musica di sottofondo

## Come creare un nuovo evento

1. Apri `js/event-config.js`.
2. Cambia nomi, data, location, contatti, immagini e colori.
3. Lascia invariati `translations.js` e `main.js` salvo necessità particolari.
4. Per disattivare una funzione, usa `sections` in `event-config.js`.
5. Sostituisci `assets/audio/music-preview.wav` con il brano definitivo.

## Nota RSVP

L'RSVP è attualmente una demo front-end. Per registrare realmente le risposte serve collegare un backend o un servizio/form esterno. La struttura è già pronta per essere collegata in una fase successiva.

## Lingue

La lingua scelta viene salvata in `localStorage`, quindi viene mantenuta quando l'invitato torna sul sito.

## Avvio

Apri il progetto con VS Code e usa Live Server, oppure pubblicalo su un normale hosting statico.


## RSVP backend

This template is connected to Supabase for RSVP submissions.

- Table: `public.rsvps`
- Browser operation: `INSERT`
- RLS: keep enabled
- Public policy: `anon` can insert RSVP rows
- No public `SELECT` policy is configured, so visitors cannot read the RSVP table.

The demo event id is `sofia-luca-2027` in `js/event-config.js`. For a new invitation, give the event a unique id.


## Admin dashboard

Open `admin.html` through Live Server to use the private RSVP dashboard.

Before using it:
1. In Supabase Authentication, create an organizer user with an email and password.
2. In SQL Editor, run `supabase/admin-policy.sql`.
3. Sign in at `admin.html`.

The dashboard only loads RSVP rows for the configured `EVENT.id`.


The admin dashboard supports Italian, English, German, French and Spanish. The selected admin language is stored locally in the browser.


## Music

The background music uses the uploaded violin-cover audio track. The original video is not included; only its audio track is used by the website.

### Gallery session delete
The normal public upload does not depend on the session-delete table. If that SQL setup has not yet been run, uploads still succeed normally; session-delete buttons become available after running `supabase/gallery-session-delete.sql` in Supabase SQL Editor (Database).

## Gallery: session-only deletion (V12)

The invitation uses Supabase Anonymous Sign-Ins so visitors do not need to log in. Each uploaded Storage object receives an `owner_id`, and the Storage DELETE policy permits deletion only for that owner.

One-time Supabase setup:
1. Dashboard -> Authentication -> Providers -> enable **Anonymous Sign-Ins**.
2. SQL Editor -> Database -> run `supabase/gallery-anonymous-delete.sql`.
3. Keep the existing public SELECT policy for `event-gallery` so the gallery remains visible.
4. Do **not** create a public/anon DELETE policy.

The browser additionally keeps the list of newly uploaded photo paths in `sessionStorage`, so the delete button is shown only for photos uploaded in the current browser session.
