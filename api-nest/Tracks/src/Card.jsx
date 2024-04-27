import React from "react";

function SongCard({song}) {
    return (
        <div id={song.id}>
            <h2>Title: {song.title}</h2>
            <h3>Artist: {song.artist}</h3>
            <h3>Duration: {song.duration}</h3>
        </div>

    )
}

export default SongCard;