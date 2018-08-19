import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  constructor(private serviciosService: ServiciosService,
              private route: ActivatedRoute,
              private router: Router ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.service = this.serviciosService.getService(id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.service = this.serviciosService.getService(+params['id']);
        }
      );
  }

  onSaveService() {
    this.serviciosService.updateService(this.service,
                                        this.serviceTitleInput.nativeElement.value,
                                        this.serviceDescrInput.nativeElement.value);
  }

  onCancel() {
    // this.serviciosService.serviceSelected.emit(null);
    this.router.navigate(['../']);
  }

}
