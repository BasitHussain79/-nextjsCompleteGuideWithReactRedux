const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter room name'],
        trim: true,
        maxLength: [100, 'Room name cannot be exceed 100 characters']
    },
    pricePerNight: {
        type: Number,
        required: [true, 'Please enter room price per night'],
        maxLength: [4, 'Room name cannot be exceed 4 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter room description']
    },
    address: {
        type: String,
        required: [true, 'Please enter room address'],
    },
    guestCapacity: {
        type: Number,
        required: [true, 'Please enter room guest capacity']
    },
    numOfBeds: {
        type: Number,
        required: [true, 'Please enter number of beds in rooms']
    },
    internet: {
        type: Boolean,
        required: false
    },
    breakfast: {
        type: Boolean,
        required: false
    },
    airConditioned: {
        type: Boolean,
        required: false
    },
    petsAllowed: {
        type: Boolean,
        required: false
    },
    roomCleaning: {
        type: Boolean,
        required: false
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                 type: String,
                 required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter room category'],
        enum: {
            values: [
                'King',
                'Single',
                'Twins'
            ],
            message: 'Please select correct category for room'
        }
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'Users',
                required: false
            },
            name: {
                type: String,
                required: false
            },
            ratings: {
                type: Number,
                required: false,
            },
            comments: {
                type: String,
                required: false
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    createdAt: {
        type: 'Date',
        default: Date.now 
    }
});

module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);
