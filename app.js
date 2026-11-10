const express = require('express');
const path = require('path');
const workingHours = require('./middleware/workingHours');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Fichiers statiques (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Le middleware s'applique à toutes les routes
app.use(workingHours);

app.get('/', (req, res) => res.render('home', { title: 'Accueil', active: 'home' }));
app.get('/services', (req, res) => res.render('services', { title: 'Nos services', active: 'services' }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Nous contacter', active: 'contact' }));

// Page 404
app.use((req, res) => res.status(404).render('404', { title: 'Page introuvable', active: '' }));

app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
