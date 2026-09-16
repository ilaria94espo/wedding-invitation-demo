# Pubblicazione su GitHub Pages

Questo progetto è già strutturato per GitHub Pages. Mantieni esattamente questa struttura:

- `index.html` nella root
- `css/`
- `js/`
- `assets/`
- `supabase/`

## Metodo consigliato: GitHub Desktop

1. Installa/apri GitHub Desktop.
2. File → Add local repository → scegli questa cartella.
3. Se non è ancora un repository locale, scegli Create a repository from the existing files.
4. Pubblica il repository `wedding-invitation-demo` sul tuo account GitHub.
5. In GitHub Pages usa `main` e `/(root)`.

## Importante
Non caricare i singoli file HTML separatamente tramite la pagina web di GitHub se questo causa la perdita delle cartelle. Le cartelle devono rimanere tali, perché `index.html` usa percorsi come `css/style.css`, `js/main.js` e `assets/images/...`.
