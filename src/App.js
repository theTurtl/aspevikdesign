import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='introSection'>
        <div className='navBar'>
          <div className='leftContainer'>
            <div className='logo'></div>
            <div className='statusBar'>Hyggelig å treffe deg! :)</div>
          </div>
          <div className='rightContainer'>
            <div className='biggerProjects'>
              <p>Større prosjekter</p>
              <div className='arriveSoon'>Kommer!</div>
            </div>
            <div className='contactBut'>Kontakt</div>
            <div className='languageSwitcher'>
              <p>NO</p>
              <div className='downArrow'></div>
            </div>
          </div>
        </div>
        <div className='animationBanner'>
          <div className='animationContainer'></div>
          <div className='bannerToggle'></div>
          <div className='garanti'>
            <div className='garantiGraphic'></div>
            <p>Fornøyd Garanti</p>
        </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
