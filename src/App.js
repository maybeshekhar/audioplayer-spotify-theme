import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Can't Be Touched",
      artist: "Roy Jones Jr.",
      img_src: "./images/tyson.jpg",
      src: "./music/cant be touched.mp3",
    },
    {
      title: "Pop Star",
      artist: "Drake ft DJ Khaled",
      img_src: "./images/dj khaled.jpg",
      src: "./music/popstar.mp3",
    },
    {
      title: "Ek Din Pyar",
      artist: "MC Stan",
      img_src: "./images/mcstan.jpg",
      src: "./music/mc stan.mp3",
    },
    {
      title: "From The Bottom",
      artist: "Drake",
      img_src: "./images/drake1.jpg",
      src: "./music/started.mp3",
    },
    {
      title: "Till I Collapse",
      artist: "Eminem",
      img_src: "./images/conor.jpg",
      src: "./music/Till I Collapse.mp3",
    },
    {
      title: "We Own It",
      artist: "Chris Brown",
      img_src: "./images/chris brown.jpg",
      src: "./music/we own it.mp3",
    },
    {
      title: "One Step Closer",
      artist: "Linkin Park",
      img_src: "./images/linkin park.jpg",
      src: "./music/one step closer.mp3",
    },
    {
      title: "No Brands",
      artist: "Emiway Bantai",
      img_src: "./images/emiway.jpg",
      src: "./music/no brands.mp3",
    },
    {
      title: "Hotline Bling",
      artist: "Drake",
      img_src: "./images/drake2.jpg",
      src: "./music/hotline.mp3",
    },
    {
      title: "Going Bad",
      artist: "Drake ft Mik Mill",
      img_src: "./images/drake3.jpg",
      src: "./music/going bad.mp3",
    },
    {
      title: "Baazigar",
      artist: "Divine",
      img_src: "./images/divine.jpg",
      src: "./music/baazigar.mp3",
    },
    {
      title: "Robbers",
      artist: "1975",
      img_src: "./images/1975.jpg",
      src: "./music/1975.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;