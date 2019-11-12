import * as React from "react";
import LaunchProfile from "./LaunchProfile";
import { useLaunchProfileQuery } from "../../generated/graphql";

const LaunchProfileContainer = () => {
    const { data, error, loading } = useLaunchProfileQuery({ variables: { id: '42' } });

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
}

export default LaunchProfileContainer;