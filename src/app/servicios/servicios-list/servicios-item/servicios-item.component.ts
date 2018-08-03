import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../service.model';
import { ServiciosService } from '../../servicios.service';

@Component({
  selector: 'app-servicios-item',
  templateUrl: './servicios-item.component.html',
  styleUrls: ['./servicios-item.component.css']
})
export class ServiciosItemComponent implements OnInit {

  @Input() service: Service;

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit() {
  }

  onSelected() {
    this.serviciosService.serviceSelected.emit(this.service);
  }

  onDelete() {
    this.serviciosService.deleteService(this.service);
  }

}
