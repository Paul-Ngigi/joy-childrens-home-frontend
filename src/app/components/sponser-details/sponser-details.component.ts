import { Component, OnInit } from '@angular/core';
import { Sponser } from '../../interfaces/sponser';
import { SponserService } from '../../services/sponser/sponser.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sponser-details',
  templateUrl: './sponser-details.component.html',
  styleUrls: ['./sponser-details.component.css']
})
export class SponserDetailsComponent implements OnInit {

  currentSponser: Sponser[] = [];

  constructor(private sponserservice:SponserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getSponser(this.route.snapshot.paramMap.get('id'));
  }

  getSponser(id:any | null){
    this.sponserservice.getOne(id).subscribe(data=>{
      this.sponserservice = data;
      console.log(data);
    })
  }

}