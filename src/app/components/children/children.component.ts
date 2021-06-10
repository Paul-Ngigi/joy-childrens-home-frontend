import { Component, OnInit } from '@angular/core';
import { Child } from '../../interfaces/child'
import { ChildService } from '../../services/child/child.service'

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  child: Child[] = []

  constructor(private childservice: ChildService) { }

  getChild(){
    this.childservice.getAll().subscribe(data=>{
      this.child = data;
      console.log(this.child);
    }, error =>{
      console.log(error);
    })
  }

  updateChild(id: any, child: Child) {
    this.childservice.update(id, child).subscribe((data) => {
      console.log(child.id)
      console.warn('data', data)
    })
    console.warn(id)
  }

  deleteBusiness(id:any){
    this.childservice.delete(id).subscribe(response => {
      console.log(response)
      this.getChild()
    }, error =>{
      console.log(error)
    })
  }

  ngOnInit(): void {
    this.getChild();
  }

}
