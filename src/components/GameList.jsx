import React from 'react'
import { Link } from 'react-router-dom'
const games = [
  {id:1,name:'جمع و تفریق سریع'},
  {id:2,name:'ضرب و تقسیم'},
  {id:3,name:'حل معادله ساده'}
]
export default function GameList(){return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {games.map(game=>(
      <Link key={game.id} to={'/game/'+game.id}>
        <div className="p-4 bg-blue-100 rounded shadow text-center hover:bg-blue-200">{game.name}</div>
      </Link>
    ))}
  </div>
)}