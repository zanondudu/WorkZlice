import React, {useState, useMemo, useCallback, useEffect} from 'react';
import Player from '../../components/player/Player';
import Button from '../../components/button/Button';

const MusicController = () => {
  const [play, setPlay] = useState(true);
  const [currentMusic, setCurrentMusic] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const [volume, setVolume] = useState(0.3);

  const musics = useMemo(() => [
    {
      played: false,
      url: 'https://www.youtube.com/watch?v=jrTMMG0zJyI',
      id: 1
    },
    {
      played: false,
      url: 'https://www.youtube.com/watch?v=mMw6UFZuL9o',
      id: 2
    },
    {
      played: false,
      url: 'https://www.youtube.com/watch?v=RLlzKraARAw',
      id: 3
    },
    {
      played: false,
      url: 'https://www.youtube.com/watch?v=9NaCaPuyyYY',
      id: 4
    },
    {
      played: false,
      url: 'https://www.youtube.com/watch?v=6yXJtOdNnNk&t=269s',
      id: 5
    },
  ], []);

  useEffect(() => {
    if(!isMounted) {
      setCurrentMusic(musics[0]);
      musics[0].played = true;
      setIsMounted(true);
    }
  
  // eslint-disable-next-line
  }, [])

  const setMusic = useCallback(() => {
    const music = musics.find(music => music.played === false);

    if(!music) {
      musics.map(music => music.played = false)
    }

    musics[currentMusic.id].played = true;
    setCurrentMusic(music);
  // eslint-disable-next-line
  }, [])

  return (
    <div style={{position: 'relative', bottom: 0}}>
      <Button
        action={() => setPlay(!play)}
        text="Play/Pause"
      />
      <Player 
        volume={0.01}
        play={play}
        music={currentMusic.url}
        changeMusic={() => setMusic()}
      />
    </div>
  )
}

export default MusicController;