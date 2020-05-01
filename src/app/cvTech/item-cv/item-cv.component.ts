import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() person:Person;
  constructor() { }

  ngOnInit(): void {
  }

}
