import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Service } from '../../../../models/service';

@Component({
  selector: 'app-servicios-item',
  templateUrl: './servicios-item.component.html',
  styleUrls: ['./servicios-item.component.css']
})
export class ServiciosItemComponent implements OnInit {

  @Input() service: Service;
  @Output() serviceSelected = new EventEmitter<void>();
  @Output() serviceDelete = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.serviceSelected.emit();
  }

  onDelete() {
    this.serviceDelete.emit();
  }

}
