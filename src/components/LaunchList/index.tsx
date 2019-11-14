import React from "react";
import LaunchList, { OwnProps } from "./LaunchList";
import { useLaunchListQuery } from "../../generated/graphql";


const LaunchListContainer = (props: OwnProps) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
