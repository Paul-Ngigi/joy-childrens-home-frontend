import { Component, OnInit } from '@angular/core';
import { Adopter } from '../../interfaces/adopter';
import { AdopterService } from '../../services/adopter/adopter.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-adopter-details',
  templateUrl: './adopter-details.component.html',
  styleUrls: ['./adopter-details.component.css']
})
export class AdopterDetailsComponent implements OnInit {

  currentAdopter: Adopter[] = [];

  constructor(private adopterservice:AdopterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAdopter(this.route.snapshot.paramMap.get('id'));
  }

  getAdopter(id:any | null){
    this.adopterservice.getOne(id).subscribe(data=>{
      this.adopterservice = data;
      console.log(data);
    })
  }

}
