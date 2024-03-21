import React from 'react'
import Logo from '../../img/Logo';
const Header = () => {
  return (
    <header className="bg-white text-black flex justify-between items-center px-4 py-4 w-full top-0 left-0 right-0 z-50">
      <div className=''>
        {/* Left side element */}
        <Logo />
      </div>
      <div className="flex justify-center items-center">
        {/* Right side elements */}
        <div className="ml-4">Crypto Taxes </div>
        <div className="ml-4">Free Tools</div>
        <div className="ml-4">Resource Center</div>
        <button className=' ml-2 px-3 py-2 text-1xl text-white rounded-lg' style={{backgroundColor:'blue'}}>Get Started</button>
      </div>
    </header>
  );
};


export default Header;