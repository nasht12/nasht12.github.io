import React, { useEffect } from 'react';
import anime from 'animejs';

interface AnimeTextProps {
    text: string
}

const AnimeText: React.FC<AnimeTextProps> = ({ text }) => {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml11 .letters');
    if (textWrapper && textWrapper.textContent) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

      const letters = document.querySelector('.ml11 .letters');
      if (letters) {
        anime.timeline({loop: true})
          .add({
            targets: '.ml11 .line',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700
          })
          .add({
            targets: '.ml11 .line',
            translateX: [0, letters.getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
          }).add({
            targets: '.ml11 .letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
          }).add({
            targets: '.ml11',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });
      }
    }
  }, []);

  return (
    <h1 className="ml11">
      <span className="text-wrapper">
        <span className="line line1"></span>
        <span className="letters">{text}</span>
      </span>
    </h1>
  );
};

export default AnimeText;