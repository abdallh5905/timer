import React, { useState } from 'react';
import CountdownTimer from './components/CountdownTimer';
import { SocialIcon } from './components/SocialIcon';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const calculateTargetDate = () => {
    const target = new Date();
    target.setDate(target.getDate() + 20);
    return target;
  };

  const [targetDate] = useState(calculateTargetDate());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setSubscribed(true);
      setEmail('');
    }
  };


  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
      
      <main className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl animate-fade-in-up">
        <h1 className="font-marcellus text-7xl md:text-9xl tracking-widest text-amber-500 mb-4">
          COR
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          نحن على وشك الانطلاق
        </p>
        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-md">
          استعد لتجربة أزياء فريدة من نوعها. كن أول من يعرف عند إطلاق مجموعتنا الجديدة.
        </p>

        <CountdownTimer targetDate={targetDate} />

        <div className="mt-16 w-full max-w-md">
          {subscribed ? (
            <p className="text-lg text-green-400 animate-pulse">شكرًا لاشتراكك! سنبقيك على اطلاع.</p>
          ) : (
            <>
              <p className="mb-4 text-gray-300">اشترك في قائمتنا البريدية ليصلك كل جديد</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ادخل بريدك الإلكتروني"
                  className="flex-grow bg-gray-800 bg-opacity-70 text-white placeholder-gray-500 px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 text-right"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-500 text-gray-900 font-bold px-8 py-3 rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300 transform hover:scale-105"
                >
                  اشتراك
                </button>
              </form>
            </>
          )}
        </div>
      </main>

      <footer className="relative z-10 mt-12">
        <div className="flex space-x-6 space-x-reverse">
          <SocialIcon type="instagram" />
          <SocialIcon type="twitter" />
          <SocialIcon type="facebook" />
        </div>
      </footer>
    </div>
  );
};

export default App;