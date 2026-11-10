# Express (Routing) Checkpoint — GOMYCODE

Application web Express avec trois pages : **Accueil**, **Nos services** et **Nous contacter**, reliées par une barre de navigation.

- Serveur et routes : **Express** (`app.js`).
- Vues : moteur de template **EJS** avec en-tête / pied de page partagés (`views/partials`).
- Style : CSS dans `public/style.css` (servi avec `express.static`).
- **Middleware personnalisé** `middleware/workingHours.js` : l'application n'est accessible que **du lundi au vendredi, de 9h à 17h**. En dehors de ces heures, une page « Nous sommes fermés » est affichée (statut 403).

```bash
npm install
npm start   # http://localhost:3000
```
