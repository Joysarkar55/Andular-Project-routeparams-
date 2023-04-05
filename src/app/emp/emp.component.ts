import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  empname='Pritam';
  observerid:any;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.empname = this.route.snapshot.params["empname"];
    this.route.paramMap.subscribe(params => {
      this.observerid = params.get('empname');
    });
  }


}
