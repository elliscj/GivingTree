// query favorites array in database

// map over each favorite and return list item button

const [queryUser, { error, data }] = useQuery(QUERY_USER);

if (error) {
  console.log(JSON.stringify(error));
}

const listFavorites = async () => {
  try {
    const { data } = await queryUser({
      variables: {
        username: Auth.getProfile().data.username,
      },
    });
    return { data };
  } catch (err) {
    console.log(err);
  }
};
//   useEffect(() => {
//     console.log(`Welcome to the useEffect!
//         Now that you've finally got here, hangout and make yourself at home!`);
//     listFavorites();
//   });
//   console.log(Auth.getProfile().data);
//   const listFavorites = Auth.getProfile().data.favorites;
