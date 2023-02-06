import { useContext } from 'react';
import { getGithubUser } from '../../services';
import { GithubUsersContext } from '../../commons';

export const useGetGithubUser = () => {
  const { searchParam, setGithubUsers } = useContext(GithubUsersContext);
  const query = () => {
    if (searchParam) {
      getGithubUser(searchParam).then((result) =>
        setGithubUsers(result?.items)
      );
    } else {
      setGithubUsers([]);
    }
  };

  return { query };
};
