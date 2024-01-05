import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Juego } from '../entidades/Juego';
import { Usuario } from '../entidades/Usuario';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  user : string = '';
  id : string ='';
  titulo : string = '';
  valoracion : string = '';
  company : string ='';
  img : string = '';


  constructor(route : ActivatedRoute, private router:Router) { 
    this.user = route.snapshot.queryParams['user'];
    this.id = route.snapshot.queryParams['id'];
    this.titulo = route.snapshot.queryParams['titulo'];
    this.valoracion = route.snapshot.queryParams['valoracion'];
    this.company = route.snapshot.queryParams['company'];
    this.img = route.snapshot.queryParams['img'];
  }

  public irHome(user : string){
    user = this.user
    this.router.navigate([ '/home', user])
  }

  ngOnInit(): void {
  }

}
