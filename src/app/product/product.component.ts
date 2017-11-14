import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((params) => this.id = params.id);
  	console.log(this.id)
  }

}
