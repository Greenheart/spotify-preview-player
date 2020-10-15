import React, { ChangeEvent, useState } from 'react'
import './App.css'

const DEFAULT_SONG_ID = '0dINQNECUzmrGu6hYRiNPx'

const App = () => {
    const [songId, setSongId] = useState(DEFAULT_SONG_ID)

    const updateSong = (event: ChangeEvent<HTMLInputElement>) => {
        const match = event.target.value.match(
            /https:\/\/open.spotify.com\/track\/(.+)\?si=/
        )

        if (match && match.length === 2) {
            setSongId(match[1])
        } else if (event.target.value === '') {
            setSongId(DEFAULT_SONG_ID)
        } else {
            console.log('invalid song ID', event.target.value, match)
        }
    }

    return (
        <div className="App">
            <div className="song-input">
                <label htmlFor="spotify-link">
                    Enter a Spotify Song Link to preview:
                </label>
                <input
                    type="text"
                    placeholder={
                        'https://open.spotify.com/track/' + DEFAULT_SONG_ID
                    }
                    name="spotify-link"
                    id="spotify-link"
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
