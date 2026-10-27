# Sito Albasoft

Sito statico HTML, CSS e JavaScript. Nessuna installazione o compilazione necessaria.

## Pubblicazione GitHub → Netlify

1. Crea su GitHub un repository chiamato `albasoft-sito` (può essere privato).
2. Estrai lo ZIP e carica **il contenuto** di questa cartella nel repository: `public/`, `netlify.toml` e questo README devono trovarsi alla radice.
3. Su Netlify seleziona **Add new project → Import an existing project → GitHub**.
4. Seleziona il repository e il branch `main`.
5. Lascia **Base directory** e **Build command** vuoti. **Publish directory**: `public` (già impostata in netlify.toml).
6. Pubblica e controlla il sito all’indirizzo assegnato da Netlify. Per collegare il dominio, usa Domain management dopo la verifica.

Ogni nuovo commit sul branch di pubblicazione aggiorna il sito tramite Netlify.

## Contenuti

- `public/index.html`: home Albasoft.
- `public/cashflow.html`: pagina Cash Flow.
- `public/privacypolicy.html` e `public/cookiepolicy.html`: informative.
- Font Manrope ospitati localmente in `public/assets/fonts/`.
- Pulsanti demo collegati a Zoom; nessun modulo di contatto attivo in questa versione.

## Ultimi controlli editoriali

Le informative riportano ancora “Ultimo aggiornamento: da indicare alla pubblicazione”. Inserire la data effettiva prima del lancio definitivo. La Privacy Policy comprende riferimenti ai moduli di contatto, che in questa versione non sono presenti.
