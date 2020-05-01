import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {

  @Input() persons :Person[];
  constructor() { }

  ngOnInit(): void {
  }

}
