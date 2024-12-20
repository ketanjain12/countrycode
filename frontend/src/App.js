import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import CountrySelect from './components/CountrySelect'
import Navbar from './Dashboard/Navbar';
import ContactPage from './Dashboard/ContactPage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import WebDevelopment from './NavServices/WebDevelopment';
import AboutUs from './NavAboutus/AboutUs';
import Reviews from './NavPages/Reviews';
import Portfolio from './NavPages/Portfolio';
import Home from './NavHome/Home';
import Notfound from './components/Notfound';
import Testimonial from './NavPages/Testimonial';
import  Forgotpassword  from './components/Forgotpassword';
import Otpcode from './components/Otpcode';
import Passwordreset from './components/Passwordreset';
import Setnewpassword from './components/Setnewpassword';
import SuccessPage from './components/Successpage';
//love babbar series
import Usecontext from './Lovebabbarcourse/Usecontext';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} /> 
        <Route path="/page1" element={<Page1 />} /> 
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Otpcode" element={<Otpcode />} />
        <Route path='/Passwordreset' element={<Passwordreset/>}/>
        <Route path='/Forgotpassword' element={<Forgotpassword />}/>
        <Route path='/Setnewpassword' element={<Setnewpassword />}/>
        <Route path='/SuccessPage' element={<SuccessPage />}/>
        <Route path="/CountrySelect" element={<CountrySelect/>}/>
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/ContactPage" element={<ContactPage/>} />
        <Route path="/WebDevelopment" element={<WebDevelopment/>} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Reviews" element={<Reviews/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Testimonial" element={<Testimonial/>}/>

        <Route path="*" element={<Notfound/>}/>

        {/* love babbar code */}
        <Route path="/Usecontext" element={<Usecontext/>}/>


      </Routes>
    </Router>
  );
}
// intermediate 2 video logic
// {/* <Route path="/" element={<Page1 />} /> in this line  page 1 like a components same with others lines */}

// {/* <Route path="*" element={<div>not found pages</div>}/> iska use jab hoota h jab upar diye gye path se koi url nhi milta h*/}

export default App;
