import React from "react";
import Header from "./components/Header";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import YandexAudio from "./components/YandexAudio";
import VideoContent from "./components/VideoContent";
import ImgPart1 from "./components/ImgPart1";
import ImgPart2 from "./components/ImgPart2";


class App extends React.Component
{
  render()
  {
    return(
      <div>
        <Header/>
      <section className="thumb">
        <ImgPart1/>
        <ImgPart2/>
        <AudioPlayer/>
        <YandexAudio/>
      </section>
        <VideoContent/>
        <Footer/>
      </div>
    )
  }
}

export default App