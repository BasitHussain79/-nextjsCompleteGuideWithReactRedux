import Image from "next/image";
import React from "react";
import { Nav } from "./styledComponent";

const Header = () => {
  return (
    <Nav>
      <div className='container flex-between'>
        <div className='logo'>
          <Image
            src='/images/bookit_logo.png'
            alt='logo'
            width='70'
            height='30'
          />
        </div>
        <div>
          <button type='button'>Login</button>
        </div>
      </div>
    </Nav>
  );
};

export default Header;
