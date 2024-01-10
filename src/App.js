import logo1 from './logo1.svg';
import logo2 from './logo2.svg';
import logo3 from './logo3.svg';
import logo4 from './logo4.svg';
import './App.css';
import empty from './empty.png'
import plus from './Plus.png'

function App() {
  return (
    <div>
      <div id="desktop">
        <div id="hero">
          <h1>The Landing Page.</h1>
          <img src={empty} alt="image" width="800px" height="450px"/>
          <div id="rows">
            <h3 style={{textAlign: 'center'}}>Go from design to site with Framer, the web builder for creative pros.</h3>
            <button id="button">Get Started</button>
          </div>
        </div>
        <div id="logos">
          <div id='wrap'>
            <div id='logo'>
              <img src={logo1} width="36px" height="36px"/>
              <div>Logo</div>
            </div>
            <div id='logo'>
              <img src={logo2} width="36px" height="36px"/>
              <div>Logo</div>
            </div>
            <div id='logo'>
              <img src={logo3} width="36px" height="36px"/>
              <div>Logo</div>
            </div>
            <div id='logo'>
              <img src={logo4} width="36px" height="36px"/>
              <div>Logo</div>
            </div>
          </div>
        </div>
        <div id="features">
          <div className='colums'>
            <img src={empty} height="100%" width="100%"/>
            <div className='content'>
              <h2>Fast</h2>
              <h3 style={{width: '270px'}}>You’ve never made a website this fast before.</h3>
              <button id="button">Read More</button>
            </div>
          </div>
          <div className='colums_reverse'>
            <img src={empty} height="100%" width="100%"/>
            <div className='content'>
              <h2>Easy</h2>
              <h3 style={{width: '270px'}}>Works like the canvas tools you’re familiar with.</h3>
              <button id="button">Read More</button>
            </div>
          </div>
        </div>
        <div id="faq">
          <h2>FAQ</h2>
          <div className='accordion'>
            <div className='row'>
              <img src={plus} width='16px' height='16px'/>
              <div>What is Framer?</div>
            </div>
            <div style={{width:'100%', height: '1px', backgroundColor: '#d9d9d9'}}/>
            <div className='row'>
              <img src={plus} width='16px' height='16px'/>
              <div>What is Framer?</div>
            </div>
            <div style={{width:'100%', height: '1px', backgroundColor: '#d9d9d9'}}/>
            <div className='row'>
              <img src={plus} width='16px' height='16px'/>
              <div>What is Framer?</div>
            </div>
          </div>
        </div>
        <div id="pivot"></div>
        <div className="colums"></div>
      </div>

    </div>
  );
}

export default App;
