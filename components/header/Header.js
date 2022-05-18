import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Nav } from "./styledComponent";

const Header = () => {
  return (
    <Nav>
      <div className='container flex-between'>
        <div className='logo'>
          <Link href='/'>
            <Image
              src='/images/bookit_logo.png'
              alt='logo'
              width='70'
              height='30'
            />
          </Link>
        </div>
        <div>
          <button type='button'>Login</button>
        </div>
      </div>
    </Nav>
  );
};

export default Header;
