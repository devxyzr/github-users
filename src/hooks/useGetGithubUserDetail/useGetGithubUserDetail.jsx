import { useContext } from 'react';
import { GithubUsersContext } from '../../commons';
import { getGithubUserDetail } from '../../services';

export const useGetGithubUserDetail = ({ nick }) => {
  const { setIsVisible, setGithubUserDetail } = useContext(GithubUsersContext);
  const query = async () => {
    await getGithubUserDetail(nick).then((result) => {
      setGithubUserDetail(result);
      setIsVisible(true);
    });
  };

  return { query };
};
