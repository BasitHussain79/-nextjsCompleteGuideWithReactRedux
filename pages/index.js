import { useSession } from "next-auth/react";
import Home from "../components/home/Home";
import Layout from "../components/layout/Layout";
import { getRooms } from "../redux/actions/roomsActions";
import { wrapper } from "../redux/store";

function HomePage() {
  const {data: session} = useSession();
  console.log('session', session)
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const getServerSideProps = 
  wrapper.getServerSideProps(store => 
    async ({req, res, query}) => {
    await store.dispatch(getRooms(
      req, 
      query.page, 
      query.location,
      query.guests,
      query.category
      ));
  }
);

export default HomePage;
