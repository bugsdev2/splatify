import React, { useEffect } from 'react';
import '../../../src/styles.css';

export default function Player() {
    const [songUrl, setSongUrl] = React.useState();
    useEffect(() => {
        fetch('https://jiosaavn-api-clone-phi.vercel.app/search/songs?query=kun+faya+kun&page=1&limit=1')
            .then((res) => res.json())
            .then((data) => {
                setSongUrl(data.data.results[0].downloadUrl[2].link);
            });
    }, []);

    var audio = new Audio(songUrl);

    function handlePlay() {
        audio.play();
    }

    function handlePause() {
        audio.pause();
    }

    function handleFastForward() {
        audio.currentTime += 10;
    }

    function handleRewind() {
        audio.currentTime -= 10;
    }

    return (
        <div className="flex flex-col gap-3 border border-red-400">
            <h1>Kun Faya Kun</h1>
            <div className="flex gap-3 border border-light justify-center">
                <button className="bi bi-play-fill btn-outline" onClick={handlePlay}></button>
                <button className="bi bi-pause btn-outline" onClick={handlePause}></button>
                <button className="bi bi-rewind btn-outline" onClick={handleRewind}></button>
                <button className="bi bi-fast-forward btn-outline" onClick={handleFastForward}></button>
            </div>
        </div>
    );
}
