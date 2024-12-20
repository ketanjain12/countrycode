import React,{createContext, useState} from 'react'
import ChildA from './ChildA';
// step1
// const UserContext=createContext();
//for light
const ThemeContext=createContext();
//step 2 wrap all the child inside a provider
// har vo child jise app support dena chaye ki vo consumer ban skta h
//  un sabi chikd ko provider ke ander wrap karna h 
// step 3 pass value
// step 4 consumer ke ander jakar consume kar lo
const Usecontext = () => {
    // const[user,setUser]=useState({name:"ketan"}) // usestate ke ander ek object pass kiya h 
    // and niche as value pass kar diya h
    // for new theme
    const [theme,setTheme]=useState('light')
  return (
  //   <div>Usecontext
  //  <UserContext.Provider value={user}>
  //        <ChildA/>
  //  </UserContext.Provider>
       
  //   </div>
  <ThemeContext.Provider value={theme}>
    <ChildA/>
  </ThemeContext.Provider>
  )
}
export default Usecontext
// export {UserContext}  
// UserContext ko export karna jaruri hai 
export {ThemeContext}  