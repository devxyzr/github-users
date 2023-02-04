import axios from 'axios';

export const getGithubUser = async (userName) => {
  const result = await axios.get(
    `https://api.github.com/search/users?q=${userName}`
  );
  const data = result.data;
  return data;
};

export const getGithubUserDetail = async (nickName) => {
  const result = await axios.get(`https://api.github.com/users/${nickName}`);
  const data = result.data;
  return data;
};
