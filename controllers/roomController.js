import catchAsyncErrors from "../middlewares/catchAsyncError";
import Rooms from "../models/rooms";
import APIFeatures from "../utils/apiFeatures";
import ErrorHandler from "../utils/errorHandler";

// get all rooms => /api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {

  const resPerPage = 4;

  const roomsCount = await Rooms.countDocuments();

  const apiFeatures = new APIFeatures(Rooms.find(), req.query)
      .search()
      .filter()

  // let rooms = await apiFeatures.query;

  apiFeatures.pagination(resPerPage);
  const rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;


  res.status(200).json({
      success: true,
      roomsCount,
      resPerPage,
      filteredRoomsCount,
      rooms
  })

})


// create new room => /api/rooms

const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Rooms.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

// get room details => /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Rooms.findById(req.query.id);

  if (!room) {
    //   return res.status(404).json({
    //     success: false,
    //     error: "Room not found with this ID",
    //   });

    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// update room details => /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res) => {
  let room = await Rooms.findById(req.query.id);

  if (!room) {
    // return res.status(404).json({
    //   success: false,
    //   error: "Room not found with this ID",
    // });
    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  room = await Rooms.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// delete room details => /api/rooms/:id
const deleteRoom = catchAsyncErrors(async (req, res) => {
  const room = await Rooms.findById(req.query.id);

  if (!room) {
    // return res.status(404).json({
    //   success: false,
    //   error: "Room not found with this ID",
    // });
    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room is deleted",
  });
});

export { allRooms, getSingleRoom, newRoom, updateRoom, deleteRoom };
