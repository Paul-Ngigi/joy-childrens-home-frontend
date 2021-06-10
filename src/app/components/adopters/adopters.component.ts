import { Component, OnInit } from '@angular/core';
import { Adopter } from '../../interfaces/adopter';
import { AdopterService } from '../../services/adopter/adopter.service'


@Component({
  selector: 'app-adopters',
  templateUrl: './adopters.component.html',
  styleUrls: ['./adopters.component.css']
})
export class AdoptersComponent implements OnInit {

  adopter: Adopter[] = []

  constructor(private adopterservice: AdopterService) { }

  getAdopter() {
    this.adopterservice.getAll().subscribe(data => {
      this.adopter = data;
      console.log(this.adopter);
    }, error => {
      console.log(error);
    })
  }

  updateAdopter(id: any, adopter: Adopter) {
    this.adopterservice.update(id, adopter).subscribe((data) => {
      console.log(adopter.id)
      console.warn('data', data)
    })
    console.warn(id)
  }

  deleteAdopter(id: any) {
    this.adopterservice.delete(id).subscribe(response => {
      console.log(response)
      this.getAdopter()
    }, error => {
      console.log(error)
    })
  }

  ngOnInit(): void {
    this.getAdopter()
  }

}
