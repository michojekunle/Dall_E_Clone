import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.log(err))
}

export default connectDB;
