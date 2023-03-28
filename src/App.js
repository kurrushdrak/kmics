
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import img1 from './images/IMG_1616.JPG';
import logo from './images/kmicslogo.jpg';
import ncclogo from './images/nss.jpg';

function App() {
  return (
    <div className="container">
      
   <Navbar/>
   <div className="logo">
   <img src={logo} alt="logo" style={{textAlign:"left"}}/>
   </div>
   <div className='nss'>
<img src={ncclogo} width="500" height="150" alt="ncclogo"/>
   </div>
   <img src={img1} alt="college" width="1250" height="600"/>
   <Footer/>
    </div>
  );
}

export default App;
