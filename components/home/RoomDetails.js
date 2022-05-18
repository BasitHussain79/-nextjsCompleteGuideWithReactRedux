import Image from "next/image";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../redux/actions/roomDetailsActions";
import { toastEmitterError } from "../../utils/helpers";
import RoomsFeatures from "./RoomsFeatures";

const RoomDetails = () => {
  const dispatch = useDispatch();
  const { room, error } = useSelector((state) => state.roomsDetails);

  useEffect(() => {
    toastEmitterError(error);
    dispatch(clearErrors());
  }, []);

  return (
    <div className='container container-fluid'>
      <h2 className='mt-5'>{room.name}</h2>
      <p>{room.address}</p>

      <div className='ratings mt-auto mb-3'>
        <div className='rating-outer'>
          <div
            className='rating-inner'
            style={{ width: `${(room.ratings / 5) * 100}%` }}
          ></div>
        </div>
        <span id='no_of_reviews'>(5 Reviews)</span>
      </div>

      <Carousel hover='pause'>
        {room.images &&
          room.images.map((image) => (
            <Carousel.Item key={image.public_id} interval={5000}>
              <div style={{ width: '100%', height: '45vh'}}>
                <Image
                  className='d-block w-100'
                  src={image.url}
                  alt={room.name}
                  layout='fill'
                />
                <Carousel.Caption>
                  <h3>{room.name}</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>

      <div className='row my-5'>
        <div className='col-12 col-md-6 col-lg-8'>
          <h3>Description</h3>
          <p>
           {room.desciption}
          </p>

          <RoomsFeatures room={room} />

        </div>

        <div className='col-12 col-md-6 col-lg-4'>
          <div className='booking-card shadow-lg p-4'>
            <p className='price-per-night'>
              <b>${room.pricePerNight}</b> / night
            </p>

            <button className='btn btn-block py-3 booking-btn'>Pay</button>
          </div>
        </div>
      </div>

      <div className='reviews w-75'>
        <h3>Reviews:</h3>
        <hr />
        <div className='review-card my-3'>
          <div className='rating-outer'>
            <div className='rating-inner'></div>
          </div>
          <p className='review_user'>by John</p>
          <p className='review_comment'>Good Quality</p>

          <hr />
        </div>

        <div className='review-card my-3'>
          <div className='rating-outer'>
            <div className='rating-inner'></div>
          </div>
          <p className='review_user'>by John</p>
          <p className='review_comment'>Good Quality</p>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
