import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Service } from '../../service.model';
import { ServiciosService } from '../../servicios.service';

@Component({
  selector: 'app-servicios-item',
  templateUrl: './servicios-item.component.html',
  styleUrls: ['./servicios-item.component.css']
})
export class ServiciosItemComponent implements OnInit {

  @Input() service: Service;

  constructor(private serviciosService: ServiciosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onSelected() {
    // this.serviciosService.serviceSelected.emit(this.service);
  }

  onDelete() {
    // const id = this.route.snapshot.params['id'];
    // console.log(id);
    // console.log(this.route.snapshot);

    this.serviciosService.deleteService(this.service);
    const filter = this.route.snapshot.queryParams.filter;
    this.serviciosService.filterService(filter ? +filter : 0);
    
    this.router.navigate(['services'], {queryParamsHandling: 'preserve'});
  }

}
