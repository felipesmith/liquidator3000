import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { HomeComponent }          from './home/home.component';
import { PostsComponent }         from './posts/posts.component';
import { EventsComponent }        from './events/events.component';
import { AboutComponent }         from './about/about.component';
import { ContactComponent }       from './contact/contact.component';
import { CreateEventComponent}    from './events/create-event/create-event.component';
import { CreateEmployeeComponent }    from './posts/create-post/create-post.component';
import { MystatisticsComponent }  from './mystatistics/mystatistics.component';
import { EventDetailsComponent }  from './events/event-details/event-details.component';
import { PostDetailsComponent }  from './posts/post-details/post-details.component';

const routes: Routes = [
  {path: '',                component: HomeComponent},
  {path: 'posts',           component: PostsComponent },
  {path: 'posts/:id',      component: PostDetailsComponent },
  {path: 'events',          component: EventsComponent},
  {path: 'events/:id',     component: EventDetailsComponent },
  {path: 'about',           component: AboutComponent },
  {path: 'contact',         component: ContactComponent },
  {path: 'createEvent',     component: CreateEventComponent },
  {path: 'createPost',      component: CreateEmployeeComponent },
  {path: 'statistics',      component: MystatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
