import axios from 'axios';

export const getGithubUser = async (userName) => {
  console.log({ userName });
  const result = await axios.get(
    `https://api.github.com/search/users?q=${userName}`
  );

  const data = result.data;

  return data;
};
