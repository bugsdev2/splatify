import React, { useEffect } from "react";
import '../../../src/styles.css'

export default function Player(){
    
    const [songUrl, setSongUrl] = React.useState()
    useEffect(() => {
        fetch ('https://jiosaavn-api-clone-phi.vercel.app/search/songs?query=kun+faya+kun&page=1&limit=1')
            .then(res => res.json())
            .then(data => {
                setSongUrl(data.data.results[0].downloadUrl[2].link);   
            })
    },[])
  
    var audio = new Audio(songUrl)

    function handlePlay(){
        audio.play()
    }

    function handlePause(){
        audio.pause()
    }

    function handleFastForward(){
        audio.currentTime += 10
    }

    function handleRewind(){
        audio.currentTime -= 10
    }
    

    return (
        <>
            <h1 className="font-sans">Kun Faya Kun</h1>
            <div> 
                <button className="bi bi-play border-2 border-dark p-2 rounded-full" onClick={ handlePlay }></button>
                <button className="bi bi-pause border-2 border-dark mx-4 rounded-full" onClick={ handlePause }></button>
                <button className="bi bi-rewind border-2 border-dark mx-4 rounded-full" onClick={ handleRewind }></button>
                <button className="bi bi-fast-forward border-2 border-dark  rounded-full" onClick={ handleFastForward }></button>
            </div>
            
        </>
    )
}
