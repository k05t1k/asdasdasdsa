import React from "react";

class YandexAudio extends React.Component
{
    render()
    {
        return(
            <div>
                <iframe className="yandaudio" frameborder="0" src="https://music.yandex.ru/iframe/track/43832011/5849760">Слушайте <a href='https://music.yandex.ru/album/5849760/track/43832011'>Dark Eyes</a> — <a href='https://music.yandex.ru/artist/716361'>Rusty K</a> на Яндекс Музыке</iframe>
            </div>
        )
    }
}

export default YandexAudio