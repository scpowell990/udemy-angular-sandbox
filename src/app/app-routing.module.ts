import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'users' , component: UsersComponent},
  {path: 'posts' , component: PostsComponent},
  {path: 'post/:id' , component: PostDetailsComponent},
  // double ** when an invalid page is entered
  {path: '**' , component: NotFoundComponent}
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
