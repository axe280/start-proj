import Plyr from 'plyr';

export const initVideos = () => {
  const $videos = document.querySelectorAll('.plyr-video');

  for (let $video of $videos) {
    new Plyr($video);
  }
};
