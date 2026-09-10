import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import OpeningPage from './pages/OpeningPage'
import HeroSection from './sections/HeroSection'
import StorySection from './sections/StorySection'
import GalerrySection from './sections/GalerrySection'
import CountdownSection from './sections/CountdownSection'
import RsvpSection from './sections/RsvpSection'
import WishesSection from './sections/WishesSection'
import './App.css'
import InformasiSection from './sections/InformasiSection'
import ThanksSection from './sections/ThanksSection'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#3d1414',
            color: '#fdfaf6',
            fontFamily: 'serif',
            border: '1px solid rgba(193,154,107,0.3)',
            borderRadius: '4px',
          },
          success: {
            iconTheme: {
              primary: '#C19A6B',
              secondary: '#3d1414',
            },
          },
        }} 
      />
      <div className="w-full min-h-screen bg-white">

        <HeroSection />
        <StorySection />
        <CountdownSection />
        <GalerrySection />
        <InformasiSection />
        <RsvpSection />
        <WishesSection />
        <ThanksSection />
      </div>

      <MusicPlayer isOpened={opened} />

      {!opened && (
        <div className="fixed inset-0 z-50">
          <OpeningPage
            floralImage="/floral-watercolor.png"
            pinImage="/wax-seal.png"
            bgColor="#3d1414"
            onOpen={() => setOpened(true)}
          />
        </div>
      )}
    </>
  );
}

export default App
