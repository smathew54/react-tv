  /**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import React from "react";
import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";

//get this list from the data


export default function App() {
  const [selectedShow, setSelectedShow] = useState();
  console.log(tvShows);


  // the return statements are the jsx
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
