import { useState, useEffect } from 'react'
import { gesSongs } from "./api/getSongs"
import { SongCar } from ".Card"
import './App.css'

function App() {
  const [songs, setSongs] = useState([])

  useEffect(()=> {
    getSong()
    .then((res)=> res.json()) 
    .then((data)=> gesSongs(data))
  }, []);

  return (
    <>
      <div>

        <h2>Tracks</h2>
        <h3>

            {songs.map((song) => (<SongCard song={song} key={song.id}/>))}

        </h3>
        
      </div>
    
    </>
  )
}

export default App
