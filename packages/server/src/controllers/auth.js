const jwt = require("jsonwebtoken") 

const { APP_API_KEY_ID, APP_API_KEY_SECRET } = process.env;

exports.authenticateUser = (req, res) => {
    const token = jwt.sign(
      {
        scope: 'appUser',
        userId: 'myNewUserID'
      },
      APP_API_KEY_SECRET,
      {
        header: {
            alg: 'HS256',
            typ: 'JWT',
            kid: APP_API_KEY_ID
        }
      }
    )
  
    res.status(200).send(token)
  }
