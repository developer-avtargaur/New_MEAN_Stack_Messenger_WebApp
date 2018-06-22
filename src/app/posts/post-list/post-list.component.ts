import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  /*
  posts = [
    { title: 'First Post', content: 'This is the first post\'s content' },
    { title: 'Second Post', content: 'This is the second post\'s content' },
    { title: 'third', content: 'This is the third post\'s content' },
  ];
  */
  posts: Post[] = [];
  private postsSubscription: Subscription;

  // public keyword will automatically create a property inside this component
  // ...to store the incoming value
  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSubscription = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        // this corresponds to the next() call from posts.service.ts,
        // ...where the value of the next() call is [...this.posts]
      });
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
