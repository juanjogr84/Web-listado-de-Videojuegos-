import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  @Input() user: any = '';
  constructor() { 
    this.user = localStorage.getItem('user');
  }

  ngOnInit(): void {
    
  }
}
