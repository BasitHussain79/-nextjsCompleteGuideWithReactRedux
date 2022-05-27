import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../redux/actions/roomsActions";
import { toastEmitterError } from "../../utils/helpers";
import RoomItem from "./RoomItem";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } =
    useSelector((state) => state.allRooms);

  useEffect(() => {
    toastEmitterError(error);
    dispatch(clearErrors());
  }, []);

  let { location, page = 1 } = router.query;
  page = Number(page);

  const handlePagination = (pageNumber) => {
    window.location.href = `/?page=${pageNumber}`;
  };

  let count = roomsCount;
  
  if(location) {
    count = filteredRoomsCount
  }

  useEffect(() => {
    console.log('testingssss*', rooms);
  }, [rooms]);
  
  return (
    <>
      <section id='rooms' className='container mt-5'>
        <h2 className='mb-3 ml-2 stays-heading'>{location ? `Rooms in ${location}`: 'Stays in New York'}</h2>
        <Link href='/search'>
          <a className='ml-2 back-to-search'>
            <ArrowBackIcon /> Back to Search
          </a>
        </Link>

        <div className='row'>
          {rooms && rooms.length === 0 ? (
            <div className="flex-center">
              <div className='alert alert-danger'>No Rooms</div>
            </div>
          ) : (
            rooms.map((room) => <RoomItem key={room._id} room={room} />)
          )}
        </div>
      </section>

      {resPerPage < count && (
        <div className='d-flex justify-content-center mt-5'>
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={roomsCount}
            onChange={handlePagination}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass='page-item'
            linkClass='page-link'
          />
        </div>
      )}
    </>
  );
};

export default Home;
