
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='flex min-h-screen w-screen flex-col gap-y-10'>
     <Navbar/>
     <HeroSection/>
    </div>
  );
}

export default App;
