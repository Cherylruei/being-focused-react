import './App.css';
// import ModeMenu from './components/menu/ModeMenu';
// import MusicMenu from './components/menu/MusicMenu';
import PlaySection from './components/PlaySection';
import TimeMenu from './components/menu/TimeMenu';

function App() {
  return (
    <div>
      <div className='menuDiv'>
        <TimeMenu mode='controller' />
        <TimeMenu music='controller' />
        <TimeMenu time='controller' />
      </div>
      <PlaySection />
    </div>
  );
}

export default App;
