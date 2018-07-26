import { Component, OnInit } from '@angular/core';

import { Service } from '../../models/service';
import { ServiciosService } from './servicios.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  selectedService: Service;

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit() {

  }

  servicesFilter(cat: number) {
    this.serviciosService.filterService(cat);
  }

}