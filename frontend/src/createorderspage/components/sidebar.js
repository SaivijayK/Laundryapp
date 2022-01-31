import list from '../../assests/list.svg';
import home from '../../assests/home-run.svg';
import './sidebar.css'
export default function Sidebar(){
    return(

<aside>
        <div className='home'><img alt="home" src={home} /></div>
        <div className='additem'><img alt="add" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/2x/external-add-button-template-for-website-and-service-basic-color-tal-revivo.png" /></div>
        <div className='optionsbutton'><img alt="options" src={list} /></div>
</aside>
    
    
)}