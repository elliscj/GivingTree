// Axios is a popular NPM package used for preforming API requests
import axios from "axios";

const search = (query) =>
  axios.get(
    `http://data.orghunter.com/v1/charitysearch?user_key=5e83606dc29f8eac5538826640e5758b${query}`
  );

export default { search };
