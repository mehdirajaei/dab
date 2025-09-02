import React from 'react'
import { useParams, Link } from 'react-router-dom'
export default function Game(){
  const {id} = useParams()
  let content
  if(id==='1') content=<p>بازی جمع و تفریق سریع</p>
  else if(id==='2') content=<p>بازی ضرب و تقسیم</p>
  else if(id==='3') content=<p>حل معادله ساده</p>
  else content=<p>بازی یافت نشد</p>
  return (<div className="p-4">
    <h2 className="text-2xl mb-4">بازی {id}</h2>
    {content}
    <Link to="/"><button className="mt-4 px-4 py-2 bg-green-400 rounded hover:bg-green-500">بازگشت به خانه</button></Link>
  </div>)
}