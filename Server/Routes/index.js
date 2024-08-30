const express = require('express');
const router = express.Router();

// import the index controller
const IndexController = require('../Controllers/index');

/* GET Default Route */
router.get('/', (req, res, next)=>
{
    IndexController.DisplayHome(req, res, next);
});

/* GET Home Page */
router.get('/home', (req, res, next)=>
{
    IndexController.DisplayHome(req, res, next);
});

/* GET: /about */
router.get('/about', (req, res, next) => {
    IndexController.DisplayAbout(req, res, next);
});

/* GET: /about */
router.get('/cv', (req, res, next) => {
    IndexController.DisplayCv(req, res, next);
});

router.get('/life', (req, res, next) => {
    IndexController.DisplayLife(req, res, next);
});

router.get('/social', (req, res, next) => {
    IndexController.DisplaySocial(req, res, next);
});


router.get('/worklog', (req, res, next) => {
    IndexController.DisplayWorklog(req, res, next);
});
module.exports = router;
