import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Nav } from "./styledComponent";

const Header = () => {
  // const dispatch = useDispatch();
  const router = useRouter();

  // const { user, loading } = useSelector((state) => state.auth);

  // console.log(user, loading)

  // useEffect(() => {
  //   dispatch(loaderUser());
  // }, [dispatch]);
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
          <button type='button' onClick={() => router.push("/login")}>
            Login
          </button>
        </div>
      </div>
    </Nav>
  );
};

export default Header;
