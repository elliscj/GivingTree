// Axios is a popular NPM package used for preforming API requests
import axios from "axios";

// const MY_KEY = process.env.REACT_APP_API_KEY;

const search = async (city, state, category) => {
  const apiCall = await axios.get(
    `/api/questions/${city}/${state}/${category}`
  );
  console.log(apiCall);

  return apiCall;
};

export default { search };
