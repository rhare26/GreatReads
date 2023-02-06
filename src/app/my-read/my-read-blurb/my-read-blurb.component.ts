import {Component, Input} from '@angular/core';
import {MyRead} from "../../_models/my-read";

@Component({
  selector: 'app-my-read-blurb',
  templateUrl: './my-read-blurb.component.html',
  styleUrls: ['./my-read-blurb.component.scss']
})
export class MyReadBlurbComponent {
  @Input() myRead!:MyRead
}
