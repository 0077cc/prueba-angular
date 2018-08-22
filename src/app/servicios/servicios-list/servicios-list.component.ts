import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Service } from '../service.model';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.css']
})
export class ServiciosListComponent implements OnInit {
  
  servicesList: Service[];

  constructor(private serviciosService: ServiciosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servicesList = this.serviciosService.getServices();
    this.serviciosService.servicesChanged
      .subscribe(
        (servicesList: Service[]) => {
          this.servicesList = servicesList;
        }
      );
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          this.serviciosService.filterService(params.filter ? +params.filter : 0);
        }
      );
  }

}
