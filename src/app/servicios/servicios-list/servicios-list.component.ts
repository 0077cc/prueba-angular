import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Service } from '../../../models/service';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.css']
})
export class ServiciosListComponent implements OnInit {

  @Output() serviceWasSelected = new EventEmitter<Service>();
  
  servicesList: Service[];

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit() {
    this.servicesList = this.serviciosService.getServices();
    this.serviciosService.servicesChanged
      .subscribe(
        (servicesList: Service[]) => {
          this.servicesList = servicesList;
        }
      );
  }
  
  onServiceSelected(service: Service) {
    this.serviceWasSelected.emit(service);
  }

  onServiceDelete(service: Service) {
    const i: number = this.servicesList.indexOf(service);
    this.servicesList.splice(i, 1);
  }

}
