import { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import { getData } from './api';
import { binanceLogo, sharingan, dailyCipher, dailyCombo, dailyReward, dollarCoin, hamsterCoin, mainCharacter } from './assets';
import Info from './icons/Info';
import Settings from './icons/Settings';
import Mine from './icons/Mine';
import Friends from './icons/Friends';
import Coins from './icons/Coins';
import Hamster from './icons/Coins';
import Header from './components/Header';
import Home from './components/Home';

import './App.css'

// Works also with SSR as expected
const Card = lazy(() => import('./Card'))

function App() {
  // const navigate = useNavigate();
  // const { user, loading } = getData();
  
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   return <div>Please log in to access this application.</div>;
  // }
  
  return (
    <div className="h-[100vh]">
      <main className="w-full h-screen font-bold flex flex-col max-w-xl">
        <Header />
        <Home dollarCoin={dollarCoin} sharingan={sharingan} />
      </main>
      <nav className="fixed bottom-0 mb-2 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-gray-200 flex justify-around items-center z-50 rounded-3xl text-xs">
        <div className="text-center text-[#85827d] w-1/5 m-1 p-2 rounded-2xl">
          <Mine className="w-8 h-8 mx-auto" />
          <p className="mt-1">Mine</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Friends className="w-8 h-8 mx-auto" />
          <p className="mt-1">Friends</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Coins className="w-8 h-8 mx-auto" />
          <p className="mt-1">Earn</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Airdrop</p>
        </div>
      </nav>
    </div>
  )
}

export default App
