const router = require('express').Router();

const routes = ['beers', 'breweries', 'checkins','likedBreweries','lists','users'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
