const jwt = require("jsonwebtoken");

const secret = "imsuperstealthywithmysecretpasswordsipromise";
const expiration = Math.floor(Date.now() / 1000) + 60 * 60;

module.exports = {
  authMiddleware: ({ req }) => {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }
    console.log(
      `token:  ${token}, secret: ${secret} expiration: ${expiration}`
    );

    try {
      const { data } = jwt.verify(token, secret, {
        expiresIn: expiration,
      });
      req.user = data;
    } catch (error) {
      console.error(error);
      console.log("Invalid Token");
    }

    return req;
  },
  signToken: ({ email, username, _id }) => {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
