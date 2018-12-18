import { Component, OnInit } from '@angular/core';
import { VideosService } from "../../videos.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router'; 
import { UserService } from "../../user.service";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  createForm: FormGroup;

  constructor(private videoService: VideosService, public user: UserService, private fb: FormBuilder, private router: Router) { 

    //create form group, with property fields
    this.createForm = this.fb.group({
      Title: ['', Validators.required],
      RunTime: '',
      Genre: '',
      Rating: '',
      Director:''
    });
  }

  //Add Video, this is added to the submit form in create.component.html
  addVideo(Title, RunTime, Genre, Rating, Director){
    // Add issue to db
    this.videoService.addVideo(Title, RunTime, Genre, Rating, Director).subscribe(function(){
      //takes user to the list page after adding to the list
      this.router.navigate(['/admin']);
    }.bind(this));
  };

  ngOnInit() {
  }

}
