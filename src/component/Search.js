// import React ,{useEffect,useState,useContext}from 'react'
// import { TextInput } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';

// function Search() {
//     const navigate1 = useNavigate();
//     const cityName = useContext(city);
//     const [city, setCity] = useState(city);
//     const [inputValue, setInputValue] = useState("")



//     useEffect(() => {
//         if (inputValue === "") setCity(city);
//         else {
//           const tempArray = city.filter((item) => item.includes(inputValue));
//           setCity(tempArray);
//         }
//       }, [inputValue]);
    
//   return (
//   <>
//   <div>
//   <TextInput
//         label="City Name"
//         description="You will see list of city name according to text value"
//         placeholder="City Name"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       {city.length ? city.map((item) => <h1>{item}</h1>) : <h1>Not Found</h1>}
//   </div>
//   </>
//   )
// }

// export default Search