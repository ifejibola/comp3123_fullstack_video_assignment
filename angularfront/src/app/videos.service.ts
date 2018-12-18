import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class VideosService {

  url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  // Add service methods

  getVideos(){
    return this.http.get(`${this.url}/lists`);
  }
  //Retrieve single video by its id
  getVideoById(id){
    return this.http.get(`${this.url}/lists/${id}`);
  }

  //Add video
  addVideo(Title, RunTime, Genre, Rating, Director){
    //videos object, containing the properties on the db
    const video = {
      Title: Title,
      RunTime: RunTime,
      Genre: Genre,
      Rating: Rating,
      Director: Director
    };

    return this.http.post(`${this.url}/lists/add`, video);
  }

  //UPDATE video //title, runTime, genre, rating, director, status
  updateVideo(id, Title, RunTime, Genre, Rating, Director, Status){
    //Videos object, containing the properties on the db
    const video = {
      Title: Title,
      RunTime: RunTime,
      Genre: Genre,
      Rating: Rating,
      Director: Director,
      Status: Status
    };
    return this.http.post(`${this.url}/lists/update/${id}`, video);
  }

  //DELETE Video
  deleteVideo(id){
    return this.http.get(`${this.url}/lists/delete/${id}`);
  }
  reserveVideo(id){
    return true;
  }
}
// next step inject video service into component