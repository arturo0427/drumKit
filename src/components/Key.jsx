import "./key.css";
import { useEffect } from "react";

export const Key = ({ sound }) => {
  
  const handleClickPlay = () => {
    new Audio(sound.soundSrc).play();
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() == sound.letter.toLowerCase()) {
        handleClickPlay();

        let divKey = document.querySelector(".key");
        divKey.classList.toggle("keyHover");
      }
    });
  }, []);

  return (
    <div className="key" onClick={handleClickPlay}>
      <kbd>{sound.letter}</kbd>
      <span className="sound">{sound.name}</span>
    </div>
  );
};
//
