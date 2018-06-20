import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NO CONTENT';
  onAddPost(postInput: HTMLTextAreaElement) {
    console.log(postInput);
    // console.dir(postInput);
    this.newPost = postInput.value;
    alert('Post added!');
  }
  onAddPostTwoWay() {
    this.newPost = this.enteredValue;
  }
}
