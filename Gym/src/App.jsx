import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import bgimg from './assets/bg.png'
import Equipment from "./Components/Equipments/Equipment"
import Banner from "./Components/Banner/Banner"
import img1 from './assets/2.png'
import img2 from './assets/3.png'
import Tab from "./Components/Tabs/Tab"
import Testimon from "./Components/Testimonails/Testimon"
import Banner2 from "./Components/Banner/Banner2"
import Footer from "./Components/Footer/Footer"



const BannerData ={
  image:img1,
  tittle:'The Important to take care of Yourself',
  subtittle:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse repellat, earum ea minima quis provident dignissimos culpa facere quasi repellendus numquam soluta vero tempora quidem, distinctio, blanditiis quaerat odit. Rem, quidem excepturi libero, eius tenetur tempore asperiores consequuntur quaerat tempora ipsum, temporibus a odit modi nisi magni fuga nesciunt!',
  link:'#',
}
const BannerData2 ={
  image:img2,
  tittle:'The Important to take care of Yourself',
  subtittle:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse repellat, earum ea minima quis provident dignissimos culpa facere quasi repellendus numquam soluta vero tempora quidem, distinctio, blanditiis quaerat odit. Rem, quidem excepturi libero, eius tenetur tempore asperiores consequuntur quaerat tempora ipsum, temporibus a odit modi nisi magni fuga nesciunt!',
  link:'#',
}
const bgStyle ={
  backgroundImage:`url(${bgimg})`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  backgroundPosition:'center',
  backgroundAttachment:'fixed',
}
function App() {
  
  return (
    <div className='overflow-x-hidden'>
     <div style={bgStyle}>
     <Navbar/>
     <Hero/>
     </div>
     <Equipment/>
     <Banner {...BannerData}/>
     <Tab/>
     <Banner {...BannerData2}/>
     <Testimon/>
    <Banner2/>
    <Footer/>
    </div>
  )
}

export default App
