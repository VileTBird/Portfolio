const User = require('../Models/user');

/**
 * This function will display the home page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function DisplayHome(req, res, next)
{
  /* Now Render the hbs page */
  res.render('index', {title: 'Pavels portfolio', page: 'home', user: req.user});
}

function DisplayAbout(req, res, next) {
  let date = new Date();

  res.render('about', {
    title: 'About',
    date: date,
    user: req.user
  });
}

function DisplayCv(req, res, next) {
  let date = new Date();

  res.render('cv', {
    title: 'CV',
    date: date,
    user: req.user
  });
}

function DisplayLife(req, res, next) {
  res.render('life', {
    title: 'Life',
    user: req.user
  });
}


module.exports = {
 DisplayHome: DisplayHome,
 DisplayAbout: DisplayAbout,
 DisplayCv: DisplayCv,
 DisplayLife: DisplayLife
}

  