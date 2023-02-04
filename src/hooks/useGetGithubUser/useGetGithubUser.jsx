import { useContext } from 'react';
import { GithubUsersContext } from '../../commons';
import { getGithubUser } from '../../services';

export const useGetGithubUser = () => {
  const { searchParam, setGithubUsers } = useContext(GithubUsersContext);
  const query = () => {
    if (searchParam) {
      getGithubUser(searchParam).then((result) =>
        setGithubUsers(result?.items)
      );
    }
  };

  return { query };
};
