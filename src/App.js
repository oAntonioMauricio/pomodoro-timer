import './App.css';
import Timer from './Components/Timer';
import Switcher from "./Components/Switcher";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-[#f6f8fa] dark:bg-[#282c34]">
        <div className='absolute top-0 right-0 p-5 invisible sm:visible' id='svgTheme'>
          <Switcher />
        </div>
        <Timer />
      </header>
    </div>
  );
}

export default App;
