import React, { useContext } from 'react'
// import { UserContext } from './Usecontext'
import { ThemeContext } from './Usecontext'
 const ChildC = () => {
    // jo bi data ya object pass kiya h usko fetch kar lenge
    // const user=useContext(UserContext);
    const theme=useContext(ThemeContext);
  return (
    <div>ChildC
      {theme}
    </div>
  )
}
export default ChildC