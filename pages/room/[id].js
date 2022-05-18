import { useSelector } from "react-redux";
import RoomDetails from "../../components/home/RoomDetails";
import Layout from "../../components/layout/Layout";
import { getRoomDetails } from "../../redux/actions/roomDetailsActions";
import { wrapper } from "../../redux/store";

function RoomsDetailPage() {
    const { room } = useSelector((state) => state.roomsDetails);

  return (
    <Layout title={`${room.name} - Book`} >
        <RoomDetails title="Room Details" />
    </Layout>
  );
}

export const getServerSideProps = 
  wrapper.getServerSideProps(store => 
    async ({req, params}) => {
    await store.dispatch(getRoomDetails(req, params.id));
  }
);

export default RoomsDetailPage;
