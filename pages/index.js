import Home from "../components/home/Home";
import Layout from "../components/layout/Layout";
import { getRooms } from "../redux/actions/roomsActions";
import { wrapper } from "../redux/store";

function HomePage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const getServerSideProps = 
  wrapper.getServerSideProps(store => async ({req, res, ...etc}) => {
    await store.dispatch(getRooms(req));
  }
);

export default HomePage;
