import "./shows.css";

import EpisodeList from "../episodes/EpisodeList"
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
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
        <h2> selected color is {show}</h2>
        <main>
        <EpisodeList 
        name ={name} 
        episodes ={show.episodes} 
        selectedEpisode = {show.selectedEpisode} 
        setSelectedEpisode={show.setSelectedEpisode}/>
        <EpisodeDetails 
        episode={show.episode}/>
        </main>
      </div>
    </div>
  );
}
