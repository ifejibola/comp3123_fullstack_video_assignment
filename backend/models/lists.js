import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//title, runTime, genre, rating, director, status
let Lists = new Schema({
    Title:{
        type: String
    },
    RunTime:{
        type: String
    },
    Genre:{
        type: String
    },
    Rating:{
        type: String
    },
    Director:{
        type: String
    },
    Status:{
        type: String,
        default:'Reserved'
    }

});
export default mongoose.model('lists', Lists);