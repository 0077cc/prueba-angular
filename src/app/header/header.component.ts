import { Component, OnInit } from '@angular/core';

import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit() {
  }

  onServicesFiltered(cat: number) {
    this.serviciosService.filterService(cat);
  }

}
