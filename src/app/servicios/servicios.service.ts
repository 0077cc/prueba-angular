import { Injectable, EventEmitter } from '@angular/core';
// import { ServiciosComponent } from './servicios.component';

import { Service } from '../../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  servicesChanged = new EventEmitter<Service[]>();

  private servicesList: Service[] = [
    new Service('Electricidad', '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit', 3),
    new Service('Auxilio Mecanico', '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit', 1),
    new Service('Chofer reemplazo', '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit', 1),
    new Service('Medico a domicilio', '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit', 2),
    new Service('Ambulancia', '5. Lorem ipsum dolor sit amet, consectetur adipiscing elit', 2),
    new Service('Gasfitero', '6. Lorem ipsum dolor sit amet, consectetur adipiscing elit', 3),
  ];

  constructor() { }

  getServices() {
    return this.servicesList;
  };

  updateService(service: Service, title: string, desc: string) {
    const i: number = this.servicesList.indexOf(service);
    this.servicesList[i].title = title;
    this.servicesList[i].description = desc;
    // this.servicesChanged.emit(this.servicesList.slice());
  };

  filterService(c: number) {
    if (c === 0) {
      this.servicesChanged.emit(this.servicesList);
    } else {
      this.servicesChanged.emit(this.servicesList.filter((service: Service) => service.category === c));
    }
  }

}