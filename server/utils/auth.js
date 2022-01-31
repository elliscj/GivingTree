const jwt = require("jsonwebtoken");

const secret = "imsuperstealthywithmysecretpasswordsipromise";
const expiration = "1h";

module.exports = {
  authMiddleware: ({ req }) => {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, {
        maxAge: expiration,
      });
      req.user = data;
    } catch {
      console.log("Invalid Token");
    }

    return req;
  },
  signToken: ({ email, username, _id }) => {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
