import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  id=1;
  observerid:any;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.params["id"];
    this.route.paramMap.subscribe(params => {
      this.observerid = params.get('id');
    });
  }


}
