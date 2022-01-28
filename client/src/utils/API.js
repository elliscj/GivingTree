// Axios is a popular NPM package used for preforming API requests
import axios from "axios";

const MY_KEY = process.env.REACT_APP_API_KEY;

const search = (query) =>
  axios.get(
    `http://data.orghunter.com/v1/charitysearch?user_key=${MY_KEY}&eligible=1`
  );

export default { search };
