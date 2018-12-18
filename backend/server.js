import express from'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Lists from './models/lists';

const app = express();

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://ife:admin@issues-d9jmn.gcp.mongodb.net/VideoListing?retryWrites=true', { useNewUrlParser: true });//issues-d9jmn.gcp.mongodb.net

const connection = mongoose.connection;

connection.once('open', function(){
    console.log('MongoDB database connection established..');
});

router.route('/lists').get(function(request, response){
    Lists.find(function(err, lists){
        if(err)
            console.log(err);
        else
            response.json(lists);
    });
});

router.route('/lists/:id').get(function(request, response){
    //Retrieve one video from the video list db
    Lists.findById(request.params.find.id, function(err, video){
        if(err)
            console.log(err);
        else
            response.json(video);
    });
});

router.route('/lists/add').post(function(request, response){

    let newVid= new Lists(request.body);

    newVid.save()
        .then(newVid =>{
        response.status(200).json({'newVid':'Added successfully'});
        })
        .catch(err =>{
            response.status(200).send('Failed to create new record');
        });
});

//Update existing video.. //title, runTime, genre, rating, director, status
router.route('/lists/update/:id').post(function(request, response){
    Lists.findById(request.params.id, function(err, video){
        if(!video)
            return next(new Error('Could not load document'));
        else
            video.Title = request.body.Title;
            video.RunTime = request.body.RunTime;
            video.Genre = request.body.Genre;
            video.Rating = request.body.Rating;
            video.Director = request.body.Director;
            video.Status = request.body.Status;

            //save updating form into db
            video.save().then(video => {
                response.json('Update done');
            });
    });
    
})

//Delete form entry
router.route('/lists/delete/:id').get(function(request, response){
    Lists.findByIdAndRemove({_id: request.params.id}, (err, list) => {
        if(err)
            response.json(err);
        else
            response.json('Removed successfully');
    });
});

app.use('/', router);
app.listen(4000, () => console.log('Express server running on port 4000'));