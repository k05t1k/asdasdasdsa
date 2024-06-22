import React from "react";

class VideoContent extends React.Component
{
    render()
    {
        return(
            <div>
                <header className="sub">
            Video Content
        </header>
        <section className="vids">
        <iframe className="youtubevid" frameborder="0" src="https://mega.nz/embed/Si5nWQiT#3-ZPOtAmPdcHAjd_HfEztKkbW4wrKbXc5bQc5-G6dGQ" allowfullscreen></iframe>
            <iframe className="youtubevid" src = "https://www.youtube.com/embed/fPaNq0YRPII" frameborder="0" allowfullscreen></iframe>
        </section>
            </div>
        )
    }
}

export default VideoContent