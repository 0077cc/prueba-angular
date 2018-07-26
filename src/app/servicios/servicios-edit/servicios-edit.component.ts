import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Service } from '../../../models/service';

import { ServiciosService } from '../servicios.service';


@Component({
  selector: 'app-servicios-edit',
  templateUrl: './servicios-edit.component.html',
  styleUrls: ['./servicios-edit.component.css']
})
export class ServiciosEditComponent implements OnInit {

  @Input() service: Service;
  // @Output() serviceUpdated = new EventEmitter<Service>();
  @ViewChild('serviceTitleInput') serviceTitleInput: ElementRef;
  @ViewChild('serviceDescInput') serviceDescrInput: ElementRef;

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit() {
  }

  onSaveService() {
    this.serviciosService.updateService(
      this.service,
      this.serviceTitleInput.nativeElement.value,
      this.serviceDescrInput.nativeElement.value
    );
    // this.serviceUpdated.emit(this.service);

    // this.serviceUpdated.emit({
    //   title: this.serviceTitleInput.nativeElement.value,
    //   description: this.serviceDescrInput.nativeElement.value
    // });
  }

}
