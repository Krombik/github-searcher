import React, { VFC } from "react";
import { FetchRV } from "types";
import fetcher from "utils/fetcher";
import useSWR from "swr";
import Loader from "containers/common/Loader";
import APIPaths from "api/apiAddresses";
import { RepoT } from "types/repo";
import Repos from "./Repos";

type Props = { username: string };

const ReposContainer: VFC<Props> = ({ username }) => {
  const { data } = useSWR<FetchRV<RepoT[]>>(
    `${APIPaths.USERS}/${username}/${APIPaths.REPOS}`,
    fetcher.get
  );

  return <Loader component={Repos} data={data} />;
};

export default ReposContainer;
