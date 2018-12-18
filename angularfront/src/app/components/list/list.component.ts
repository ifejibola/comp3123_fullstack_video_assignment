import { Component, OnInit } from '@angular/core';
import { VideosService } from "../../videos.service";
import { Video } from "../../videos.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //data source
  videos: Video[];
  //Use matTable to create table, and declare what columns to be displayed
  displayedColumns = ['Title', 'RunTime', 'Genre', 'Rating', 'Director', 'Status', 'Actions'];


  constructor(private videoService: VideosService, private router: Router) { }

  ngOnInit() {
   
    this.fetchVideos()
  }
  //Event handler methods
  fetchVideos(){
    this.videoService.getVideos().subscribe(function (data: Video[]) {
      this.videos = data;
      console.log("Data requested ...");
      console.log(this.videos);
    }.bind(this))
  }

  reserveVideo(id){
    return console.log("Reserving....");
  }
}

