import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Forty Seven",
      artist: "Moosewala",
      img_src: "./images/1.jpg",
      src: "./music/47.mp3",
    },
    {
      title: "295",
      artist: "Moosewala",
      img_src: "./images/2.jpg",
      src: "./music/295.mp3",
    },
    {
      title: "Bad Fela",
      artist: "Moosewala",
      img_src: "./images/3.jpg",
      src: "./music/badfela.mp3",
    },
    {
      title: "Built Different",
      artist: "Moosewala",
      img_src: "./images/4.jpg",
      src: "./music/built.mp3",
    },
    {
      title: "East Side Flow",
      artist:"Moosewala",
      img_src: "./images/5.jpg",
      src: "./music/east.mp3",
    },
    {
      title: "Game",
      artist: "Moosewala",
      img_src: "./images/6.jpg",
      src: "./music/game.mp3",
    },
    {
      title: "Legend",
      artist: "Moosewala",
      img_src: "./images/8.jpg",
      src: "./music/legend.mp3",
    },
    {
      title: "Levels",
      artist: "Moosewala",
      img_src: "./images/9.jpg",
      src: "./music/levels.mp3",
    },
    {
      title: "Lifestyle",
      artist: "Moosewala",
      img_src: "./images/10.jpg",
      src: "./music/lifestyle.mp3",
    },
    {
      title: "Never Fold",
      artist: "Moosewala",
      img_src: "./images/11.jpg",
      src: "./music/neverfold.mp3",
    },
    {
      title: "Outlaw",
      artist: "Moosewala",
      img_src: "./images/13.jpg",
      src: "./music/outlaw.mp3",
    },
    {
      title: "Tibeyan Da Putt",
      artist: "Moosewala",
      img_src: "./images/14.jpg",
      src: "./music/tibeyan.mp3",
    },
    {
      title: "Vaar",
      artist: "Moosewala",
      img_src: "./images/16.jpg",
      src: "./music/vaar.mp3",
    },
    {
      title: "So High",
      artist: "Moosewala",
      img_src: "./images/moosa.jpg",
      src: "./music/sohigh.mp3",
    },
    {
      title: "Signed To God",
      artist: "Moosewala",
      img_src: "./images/moosa.jpg",
      src: "./music/signed.mp3",
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