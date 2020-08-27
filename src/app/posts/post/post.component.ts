import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: any;

  constructor(private activatedRoute: ActivatedRoute) {
    // this.id = this.activatedRoute.snapshot.params.id;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(){}

}
