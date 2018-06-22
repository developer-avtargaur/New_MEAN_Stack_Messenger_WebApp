import { Component } from '@angular/core';
// import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  // enteredContent = '';
  // enteredTitle = '';
  // @Output() postCreated = new EventEmitter<Post>(); // turn this into an event

  constructor(public postsService: PostsService) {}


  onAddPostTwoWay(form: NgForm) {
    if (form.invalid) {
      return;
    }
    /*
    const post: Post = {
      // title: this.enteredTitle,
      // content: this.enteredContent,
      title: form.value.title,
      content: form.value.content,
    };
    */
    // this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
