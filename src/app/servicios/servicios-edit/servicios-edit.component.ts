import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Service } from '../service.model';

import { ServiciosService } from '../servicios.service';


@Component({
  selector: 'app-servicios-edit',
  templateUrl: './servicios-edit.component.html',
  styleUrls: ['./servicios-edit.component.css']
})
export class ServiciosEditComponent implements OnInit {

  @Input() service: Service;
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
  }

  onCancel() {
    this.serviciosService.serviceSelected.emit(null);
  }

}
