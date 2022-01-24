import '../styling/App.css';
import list from '../assests/list.svg';
import more from '../assests/more.svg';
import home from '../assests/home-run.svg';
import Loginfooter from './Loginfooter';
import Loginheader from './Loginheader';
function App() {
  return (
    <div className='app'>
          <Loginheader/>
 
    <aside>
    <div className='home'><img alt="home" src={home}/></div>
      <div className='additem'><img alt="add" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/2x/external-add-button-template-for-website-and-service-basic-color-tal-revivo.png"/></div>
      <div className='optionsbutton'><img alt="options" src={list}/></div>
    </aside>
    <div className='forflex'>   
      <div className='orders'>
      Orders | 0
    </div>
    <div className='searchbar'>
    <input type="text"/>
    </div>
    </div>
    <div className='middlebutton'>
      No Orders available
      <input type="button"/>
    </div>
    <Loginfooter/>
    </div>


  );
}

export default App;
