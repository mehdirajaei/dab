import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Game1() {
  const [num1, setNum1] = useState(Math.floor(Math.random()*10));
  const [num2, setNum2] = useState(Math.floor(Math.random()*10));
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    if(parseInt(answer) === num1 + num2){
      setFeedback('درست است ✅');
    } else {
      setFeedback('اشتباه ❌');
    }
  }

  const newQuestion = () => {
    setNum1(Math.floor(Math.random()*10));
    setNum2(Math.floor(Math.random()*10));
    setAnswer('');
    setFeedback('');
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">جمع و تفریق سریع</h2>
      <p>حاصل {num1} + {num2} چقدر است؟</p>
      <input type="number" value={answer} onChange={e=>setAnswer(e.target.value)} className="border p-1 m-2"/>
      <button onClick={checkAnswer} className="bg-blue-400 text-white px-3 py-1 rounded">بررسی</button>
      <button onClick={newQuestion} className="bg-green-400 text-white px-3 py-1 rounded ml-2">سوال جدید</button>
      <p className="mt-2">{feedback}</p>
      <Link to="/"><button className="mt-4 px-4 py-2 bg-gray-400 rounded hover:bg-gray-500">بازگشت به خانه</button></Link>
    </div>
  )
}
