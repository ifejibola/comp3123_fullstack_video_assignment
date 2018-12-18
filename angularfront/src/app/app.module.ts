import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule, MatFormFieldModule,  MatInputModule,
  MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule,
   MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule} from '@angular/material';

import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminComponent } from './components/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideosService } from './videos.service';
import { UserService } from "./user.service";
import { ReserveComponent } from './components/reserve/reserve.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'lists', component: ListComponent},
  { path: 'admin', component: AdminComponent},
  { path: '', redirectTo: 'lists', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    AdminComponent,
    ReserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatToolbarModule, MatInputModule, MatFormFieldModule,
    MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule,
    MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule, ReactiveFormsModule, AngularFireDatabaseModule,AngularFireAuthModule, AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyB1btfZOxOYOpr9cTn7MGTAs--TIBbkk90",
        authDomain: "adminservice-d2dc5.firebaseapp.com",
        databaseURL: "https://adminservice-d2dc5.firebaseio.com",
        projectId: "adminservice-d2dc5",
        storageBucket: "adminservice-d2dc5.appspot.com",
        messagingSenderId: "179206989838"
      })
  ],
  providers: [VideosService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
