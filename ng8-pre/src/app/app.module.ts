import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { NavComponent, popUpLogin }     from './nav/nav.component';
import { AboutComponent }   from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent }    from './home/home.component';
import { PostsComponent }   from './posts/posts.component';
import { EventsComponent }  from './events/events.component';

//MATERIAL DESIGN
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';


import {MatNativeDateModule} from '@angular/material/core';

import {DialogOverviewExampleDialog} from './posts/create-post/create-post.component';
//import{TableExpandableRowsExample} from './contact/contact.component'
import {popUpSignUp} from '../app/nav/nav.component';

//CSS STYLES
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { CreateEmployeeComponent} from './posts/create-post/create-post.component';
import { MystatisticsComponent } from './mystatistics/mystatistics.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { PostDetailsComponent, novedad, nuevoConcepto } from './posts/post-details/post-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PostsComponent,
    EventsComponent,
    CreateEventComponent,
    CreateEmployeeComponent,
    popUpSignUp,
    popUpLogin,
    novedad,
    nuevoConcepto,
    //TableExpandableRowsExample,
    DialogOverviewExampleDialog,
    MystatisticsComponent,
    EventDetailsComponent,
    PostDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Silencia el warning de ngModel con FormControl
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),

    //MATERIAL DESIGN
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatListModule



  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NavComponent, popUpSignUp,popUpLogin,novedad, nuevoConcepto,/*TableExpandableRowsExample, */DialogOverviewExampleDialog ],
})
export class AppModule { }
