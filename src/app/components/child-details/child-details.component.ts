import { Component, OnInit } from '@angular/core';
import { Child } from '../../interfaces/child';
import { ChildService } from '../../services/child/child.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {

  currentChild: Child[] = [];


  constructor(private childservice:ChildService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getChild(this.route.snapshot.paramMap.get('id'));
  }

  getChild(id:any | null){
    this.childservice.getOne(id).subscribe(data=>{
      this.currentChild = data;
      console.log(data);
    })
  }

}
