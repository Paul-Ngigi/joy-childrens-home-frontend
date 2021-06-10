import { Component, OnInit } from '@angular/core';
import { Sponser } from '../../interfaces/sponser';
import { SponserService } from '../../services/sponser/sponser.service'


@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.css']
})
export class SponsersComponent implements OnInit {

  sponser: Sponser[] = []

  constructor(private sponserservice: SponserService) { }

  getSponser() {
    this.sponserservice.getAll().subscribe(data => {
      this.sponser = data;
      console.log(this.sponser);
    }, error => {
      console.log(error);
    })
  }

  updateSponser(id: any, sponser: Sponser) {
    this.sponserservice.update(id, sponser).subscribe((data) => {
      console.log(sponser.id)
      console.warn('data', data)
    })
    console.warn(id)
  }

  deleteSponser(id: any) {
    this.sponserservice.delete(id).subscribe(response => {
      console.log(response)
      this.getSponser()
    }, error => {
      console.log(error)
    })
  }

  ngOnInit(): void {
    this.getSponser();
  }

}
