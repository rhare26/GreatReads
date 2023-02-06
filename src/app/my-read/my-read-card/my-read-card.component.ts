import {Component, Input} from '@angular/core';
import {Book} from "../../_models/book";
import {MyRead} from "../../_models/my-read";

@Component({
  selector: 'app-my-read-card',
  templateUrl: './my-read-card.component.html',
  styleUrls: ['./my-read-card.component.scss']
})
export class MyReadCardComponent {
  @Input() myRead!:MyRead

  view() {

  }

  openEditMyReadDialog() {

  }

  delete() {

  }
}
