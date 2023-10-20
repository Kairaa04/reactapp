import { createContext } from 'react';
import {Routes , Route} from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import Form from './component/Form';
import About from './component/About';
import Wishlist from './component/Wishlist';
import Friend from './component/Friend';
import Contact from './component/Contact';
import Search from './component/Search';

const data1 = createContext();
const data2 = createContext();
const cityName =createContext();

function App() {
  const name = "Kanak"
  const pass = 123456
//   const city = [ "Reykjavik, Iceland",
//                 "Ljubljana, Slovenia" ,
//                 "Windhoek, Namibia",
//                 "Yerevan, Armenia",
//                 "Ouagadougou, Burkina Faso",
//                 "Bishkek, Kyrgyzstan",
//                 "Asunción, Paraguay",
//                 "Ulaanbaatar, Mongolia",
//                 "Maseru, Lesotho",
//                 "Dushanbe, Tajikistan",
//                 "Bujumbura, Burundi",
//                 "Bandar Seri Begawan, Brunei",
//                 "Nuku'alofa, Tonga",
//                 "Thimphu, Bhutan",
//                 "Paramaribo, Suriname",
//                 "Apia, Samoa",
//                 "Funafuti, Tuvalu",
//                 "Majuro, Marshall Islands",
//                 "Vaduz, Liechtenstein",
//                 "Basseterre, Saint Kitts and Nevis",
//                 "San Francisco",
//                 "Sydney",
//                 "Berlin",
//                 "Cape Town",
//                 "Tokyo",
//                 "London",
//                 "New Orleans",
//                 "Amsterdam",
//                 "Mumbai",
//                 "Rio de Janeiro"
// ];

  return (
    <>
     < data1.Provider value={name}>
       < data2.Provider value={pass}>
        {/* <city.Provider value={city}> */}
        <Routes> 
          <Route path='/' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Form' element={<Form/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Wishlist' element={<Wishlist/>}/>
          <Route path='/Friend' element={<Friend/>}/>
          <Route path='/Contact' element={<Contact/>}/>

          {/* <Route path='/Search' element={<Search/>}/> */}
         </Routes>
         {/* </city.Provider> */}
       </ data2.Provider>
     </ data1.Provider>
    </>
  );
}

export default App;
export {data1 , data2}
// export {cityName}
