import React from "react";

class AudioPlayer extends React.Component
{
    render()
    {
        return(
            <div className="player">
            <img className="gif" src = "https://i.postimg.cc/5y5j20Zj/madara-eating.gif" alt = "empty"/>
            <audio src = "(Road To Ninja Naruto The Movie) OST Madara.mp3" alt = "not found" controls loop></audio>
        </div>
        )
    }
}

export default AudioPlayer