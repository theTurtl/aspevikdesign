import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className='introSection'>
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
        
        
      </section>
     
      <section className='aboutMe'>
        <div className='sectionLimiter'>
        <div className='aboutContainer'>
          <div className='aboutTextContainer'>
            <div className='nameText'>
              <p>Kdgis, mitt navn er</p>
              <h7>Adrian Aspevik :)</h7>
            </div>
            <div className='aboutText'>
              <h3>Jeg bygger applikasjoner.</h3>
              <h4>Jeg er 26 år, og er en designer og utvikler 
                basert i Bergen. Min største interesse er å lage 
                løsninger som konverterer og gir verdi for din virksomhet.
              </h4>
            </div>
          </div>
          <div className='aboutIllustration'></div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;
