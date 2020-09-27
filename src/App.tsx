import React, { ChangeEvent, useState } from 'react'
import './App.css'

const DEFAULT_SONG_ID = '0dINQNECUzmrGu6hYRiNPx'

const App = () => {
    const [songId, setSongId] = useState(DEFAULT_SONG_ID)

    const updateSong = (event: ChangeEvent<HTMLInputElement>) => {
        const spotifyURI = event.target.value
        const res = spotifyURI.split('spotify:track:')

        if (res && res.length === 2) {
            setSongId(res[1])
        } else if (event.target.value === '') {
            setSongId(DEFAULT_SONG_ID)
        } else {
            console.log('invalid song ID', spotifyURI, res)
        }
    }

    return (
        <div className="App">
            <div className="uri-input">
                <label htmlFor="spotify-uri">
                    Enter a Spotify URI to preview:
                </label>
                <input
                    type="text"
                    placeholder={'spotify:track:' + DEFAULT_SONG_ID}
                    name="spotify-uri"
                    id="spotify-uri"
                    autoFocus
                    onChange={updateSong}
                    onFocus={(event) => event.target.select()}
                />
            </div>
            {songId ? (
                <iframe
                    title={'Spotify Song Preview for track: ' + songId}
                    src={'https://open.spotify.com/embed/track/' + songId}
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowTransparency
                    allow="encrypted-media"></iframe>
            ) : null}
        </div>
    )
}

export default App
