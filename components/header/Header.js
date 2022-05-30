import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loaderUser } from "../../redux/actions/userActions";
import { Nav } from "./styledComponent";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loaderUser());
  }, [dispatch]);

  const logoutHandler = () => {
    signOut();
  }

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
        {/* <div>
          <button type='button' onClick={() => router.push("/login")}>
            Login
          </button>
        </div> */}

        <>
          {user && (
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  background: "transparent",
                  color: "#333",
                  padding: 0,
                  border: "none",
                }}
              >
                <a
                  // className='btn dropdown-toggle mr-4'
                  id='dropDownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <figure className='avatar avatar-nav'>
                    <img
                      src={user.avatar && user.avatar.url}
                      alt={user && user.name}
                      className='rounded-circle'
                    />
                  </figure>
                  <span>{user && user.name}</span>
                </a>
              </Dropdown.Toggle>

              <Dropdown.Menu variant='dark'>
                  <Link href="/bookings/me">
                    <a className="dropdown-item">My Bookings</a>
                  </Link>
                <Link href="/me/update">
                    <a className="dropdown-item">Profile</a>
                  </Link>
                <Link href="/">
                    <a className="dropdown-item text-danger" onClick={() => logoutHandler()}>Logout</a>
                  </Link>
                <Dropdown.Divider />
                <Dropdown.Item href='#/action-4'>Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {!user && (
            <Link href='/login'>
              <a className='btn btn-danger px-4 text-white login-header-btn float-right'>
                Login
              </a>
            </Link>
          )}
        </>
      </div>
    </Nav>
  );
};

export default Header;
