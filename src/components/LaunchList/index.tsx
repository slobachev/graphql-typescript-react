import React from "react";
import LaunchList from "./LaunchList";
import { useLaunchListQuery } from "../../generated/graphql";

const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return <LaunchList data={data} />;
};

export default LaunchListContainer;
