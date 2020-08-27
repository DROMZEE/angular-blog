import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  post = {
    id: 6,
    title: 'Titre du post 6',
    author: 'Cedric D',
    description: 'La description du post 6 de notre application Angular 10'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoPost(postId: any) {
    this.router.navigate(['/post/', postId]);
  }

}
