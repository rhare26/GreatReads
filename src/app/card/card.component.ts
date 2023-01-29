import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() item!: any;
  @Input() title!: any;
  @Input() subtitle!: any;
  @Input() content!: any;
  @Output() onView: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit(): void{}

  editClick() {
    this.onEdit.emit(this.item);
  }

  deleteClick() {
    this.onDelete.emit(this.item);
  }

  viewClick() {
    this.onView.emit(this.item);
  }
}
