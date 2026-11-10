// Middleware personnalisé : l'application n'est accessible que
// du lundi au vendredi, de 9h à 17h.
function workingHours(req, res, next) {
  const now = new Date();
  const day = now.getDay(); // 0 = dimanche, 6 = samedi
  const hour = now.getHours();

  const isWeekday = day >= 1 && day <= 5;
  const isOpenHour = hour >= 9 && hour < 17;

  if (isWeekday && isOpenHour) {
    return next();
  }

  res.status(403).render('closed', { title: 'Fermé', now: now.toLocaleString('fr-FR') });
}

module.exports = workingHours;
