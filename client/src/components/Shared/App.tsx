import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

import { makeStyles, Theme } from "@material-ui/core/styles";

import SerchTracks from "../Track/SearchTracks";
import TrackList from "../Track/TrackList";
import CreateTrack from "../Track/CreateTrack";
import Loading from "../Shared/Loading";
import Error from "../Shared/Error";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing(2),
  },
}));

interface Track {
  id: number;
  title: string;
  url: string;
  likes: [number];
  postedBy: {
    id: number;
    username: string;
  };
}

interface TracksRequest {
  tracks: [Track]
}

const App = () => {
  const [searchResult, setSearchResult] = useState<Array<Track>>([]);
  const classes = useStyles();
  const { data, loading, error } = useQuery<TracksRequest>(GET_TRACKS);
  const tracks = searchResult.length > 0 ? searchResult : data && data.tracks;

  return (
    <div className={classes.container}>
      <SerchTracks setSearchResult={setSearchResult} />
      {loading && <Loading />}
      {error && <Error error={error} />}
      {tracks && <TrackList tracks={tracks} />}
      <CreateTrack />
    </div>
  );
};

export const GET_TRACKS = gql`
  query getTracksQuery {
    tracks {
      id
      title
      description
      url
      likes {
        id
      }
      postedBy {
        id
        username
      }
    }
  }
`;

export default App;
