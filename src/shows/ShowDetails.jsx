import "./shows.css";

import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import { useState } from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!show) {
    return (
      <section className="show-details">
        <h2>Show Details</h2>
        <p>Select a show to learn more.</p>
      </section>
    );
  }
  return (
    <div className="show-details">
      <div className="handle">
        <h2> Here is the selected Show</h2>
        <main>
          <EpisodeList
            name={show.name}
            episodes={show.episodes}
            selectedEpisode={selectedEpisode}
            setSelectedEpisode={setSelectedEpisode}
          />
          <EpisodeDetails episode={selectedEpisode} />
        </main>
      </div>
    </div>
  );
}
