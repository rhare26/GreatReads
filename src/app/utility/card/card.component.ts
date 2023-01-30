import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() image!: any;
  @Input() title!: any;
  @Input() subtitle!: any;
  @Input() content!: any;
  @Input() contentPrefix?: any;

  @Output() onView: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit(): void{}

  editClick() {
    this.onEdit.emit();
  }

  deleteClick() {
    this.onDelete.emit();
  }

  viewClick() {
    this.onView.emit();
  }
}
