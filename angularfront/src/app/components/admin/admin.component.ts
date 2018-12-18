import { Component, OnInit } from '@angular/core';
import { VideosService } from "../../videos.service";
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from "@angular/material";
import { Video } from "../../videos.model";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //data source
  videos: Video[];
  //Use matTable to create table, and declare what columns to be displayed
  displayedColumns = ['Title', 'RunTime', 'Genre', 'Rating', 'Director', 'Status', 'Actions'];

  constructor(public videoService: VideosService, public user: UserService, private router: Router) { }

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

  //Edit issue, this is not the edit page itll just link to edit route
  editVideo(id){
    this.router.navigate([`/edit/${id}`]);
  }

  //delete issue
  deleteVideo(id){
    this.videoService.deleteVideo(id).subscribe(function(){
      //makes sure issue list is updated after delete
      this.fetchVideos()
    })
  }
}


