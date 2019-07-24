import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/Posts'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit() {
    // this is how we get the params passed form one route(page) to the other
    const id = +this.route.snapshot.paramMap.get('id'); 
    //using subscribe get the returned observable
    this.postService.getPost(id).subscribe(post => this.post = post);
    console.log(id);
  }

}
