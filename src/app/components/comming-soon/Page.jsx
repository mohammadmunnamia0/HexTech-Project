'use client';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import logo from '../../../public/return_hex_trans.png'

export default function Page() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-02-15T00:00:00');
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = async () => {
    if (!email.includes('@')) {
      setMessage('Please enter a valid email.');
      return;
    }
    setMessage('Failed to save email.');
    return;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
       <section>
        <Image src={logo} alt="returnhex_trans" className='h-auto sm:h-[100px] w-auto' />
        </section> 
      <h1 className="text-2xl sm:text-5xl font-bold mb-4">Retrunhex is Coming Soon</h1>
      <p className="text-lg sm:text-lg mb-6 text-gray-400">We're working hard to launch soon. Stay tuned!</p>
      <div className="flex sm:space-x-4 sm:text-center text-xl">
        {Object.keys(timeLeft).length ? (
          Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-gray-500 p-1 w-auto sm:p-4 rounded-lg sm:w-24 m-1">
              <span className="text-lg sm:text-3xl font-bold">{value}</span>
              <div className="text-sm uppercase text-white font-bold">{unit}</div>
            </div>
          ))
        ) : (
          <p>Launching now!</p>
        )}
      </div>
            <div className="mt-6 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg text-black outline-dashed"
        />
        <button
          onClick={handleSubscribe}
          className="mt-3 w-full bg-black hover:bg-gray-500 text-white hover:text-black p-3 rounded-lg font-bold"
        >
          Notify Me
        </button>
        {message && <p className="mt-2 text-sm text-green-400">{message}</p>}
      </div>
    </div>
  );
}
