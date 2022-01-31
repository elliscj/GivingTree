// Axios is a popular NPM package used for preforming API requests
import axios from "axios";

// const MY_KEY = process.env.REACT_APP_API_KEY;

const search = async (query) =>
  axios.get(
    `https://api.data.charitynavigator.org/v2/Organizations?app_id=1f111d45&app_key=45644615277bb0eaacf2e9e76d6fb930=${query}`
  );

export default { search };
