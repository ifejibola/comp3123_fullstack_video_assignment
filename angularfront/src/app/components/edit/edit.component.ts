import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatTableDataSource, MatSnackBar } from "@angular/material";

import { VideosService } from "../../videos.service";
import { Video } from "../../videos.model";
import { UserService } from "../../user.service";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:String;
  //Holds video object
  video: any = {};
  public updateForm: FormGroup;

  // Injection to add services 
  constructor(private videoService: VideosService, public user: UserService, private router: Router, 
    private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
      this.createForm();
    }

    createForm(){
      this.updateForm = this.fb.group({
        Title: ['', Validators.required],
        RunTime: '',
        Genre: '',
        Rating: '',
        Director: '',
        Status: ''
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params.id;
      this.videoService.getVideoById(this.id).subscribe(function(res) {
        this.video = res;
        //Getting previously stored selected video for edit, and passing it to the form to be edited
        this.updateForm.get('Title').setValue(this.video.Title);
        this.updateForm.get('RunTime').setValue(this.video.RunTime);
        this.updateForm.get('Genre').setValue(this.video.Genre);
        this.updateForm.get('Rating').setValue(this.video.Rating);
        this.updateForm.get('Director').setValue(this.video.Director);
        this.updateForm.get('Status').setValue(this.video.Status);

      });
    });
  }

  //saving the edited form
  updateVideo(Title, RunTime, Genre, Rating, Director, Status){
    this.videoService.updateVideo(this.id, Title, RunTime, Genre, Rating, Director, Status).subscribe(()=>{
      this.snackBar.open('Video updated successfully', 'OK', {
        duration: 3000
      });
      this.router.navigate(['/admin']);
    });
  }
}
