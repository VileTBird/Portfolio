const User = require('../Models/user');
const { TwitterApi } = require('twitter-api-v2');

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

const client = new TwitterApi({
  appKey: 'Lt7BUMTpK7USFAFNzgklpsDJd',
  appSecret: 'GFTGL3QCqqxm9g8QsWCXon2wRqQa5fWtsnyANrySLC9lI9Nwjd',
  accessToken: '1519152886915215360-Dlm9HpBVOS4SwvydUb0sRDz1Ccl6jn',
  accessSecret: 'your-access-secret',
});

const DisplaySocial = async (req, res, next) => {
  // try {
    // const userTimeline = await client.v2.userTimeline('user_id', { max_results: 5 });
    // const tweets = userTimeline.data;

    res.render('social', {
      title: 'social',
      user: req.user
    });
 // } catch (error) {
 //   console.error('Error fetching tweets:', error);
    // res.status(500).send('Error fetching tweets');
 //}
};


module.exports = {
 DisplayHome: DisplayHome,
 DisplayAbout: DisplayAbout,
 DisplayCv: DisplayCv,
 DisplayLife: DisplayLife,
 DisplaySocial: DisplaySocial
}

  