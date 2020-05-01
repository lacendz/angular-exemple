import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  persons : Person [];
  constructor() { }

  ngOnInit(): void {
    this.persons = [
      new Person (1, 'Lahcene','KEBAS',31, 'myfhoto.JPG',11245789,'Ingénieur Informatique'),
      new Person (2, 'Nourdin','KEBAS',31, 'rotating_card_profile2.png',11245789,'Enseignant'),
    ]
  }

}
