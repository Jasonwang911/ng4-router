import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { DescService } from './../service/desc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public heroes = [
  	{'id': 1, 'name': '六子'},
  	{'id': 2, 'name': '小明'},
  	{'id': 3, 'name': '老头'},
  	{'id': 4, 'name': '小头'},
  	{'id': 5, 'name': '大头'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  	setTimeout(() => {
  		this.router.navigate(['/product', 5])
  	}, 5000);
  }

  choose(event) {
  	console.log(event.name);
  }

}
