import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const Heading = () => {
  

  return (
    <div>
      <nav >
        <Link to='/'>Home</Link>
       
        <HashLink to={"/#about"}>About</HashLink>     {/* important */}
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to='/contact'>Contact</Link>
        <Link to='/services'>Services</Link>
      </nav>
    </div>
  );
}

export default Heading;

{/* <h2>i am a wonder boy {a}</h2>   */}

// <a href='/'>home</a>