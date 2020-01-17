import React, { useEffect } from "react";
import LaunchProfile from "./LaunchProfile";
import { useLaunchProfileQuery } from "../../generated/graphql";

interface OwnProps {
  id: number;
}

const LaunchProfileContainer = ({ id }: OwnProps) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) }
  });

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;