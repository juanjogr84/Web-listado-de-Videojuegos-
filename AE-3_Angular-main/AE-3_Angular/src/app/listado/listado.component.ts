import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Juego } from '../entidades/Juego';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  user : string = '';
  id : number = 0;
  listadoJuegos : Juego[] = [];


  constructor(route : ActivatedRoute, private router:Router) { 
    this.user = route.snapshot.params["user"];
    let juego : Juego = new Juego("The Legend of Zelda: Breath of the Wild", "Nintendo", 10, "../assets/juegos/Zbotw.jpeg");
    this.listadoJuegos.push(juego);
    juego = new Juego("Red Dead Redemption 2", "Rockstar Games", 9.5, "../assets/juegos/Rdr2.jpeg");
    this.listadoJuegos.push(juego);
    juego = new Juego("The Witcher 3: Wild Hunt", "CD Projekt", 9.8, "../assets/juegos/Tw3wh.jpeg");
    this.listadoJuegos.push(juego);
    juego = new Juego("Grand Theft Auto V", "Rockstar Games", 9.6, "../assets/juegos/Gtav.jpeg");
    this.listadoJuegos.push(juego);
    juego = new Juego("God of War", "Santa Monica Studio", 9.7, "../assets/juegos/Gow.jpeg");
    this.listadoJuegos.push(juego);
    juego = new Juego("Super Mario Odyssey", "Nintendo", 9.5, "../assets/juegos/Smo.jpeg");
    this.listadoJuegos.push(juego);
    juego = new Juego("Minecraft", "Mojang", 9.4, "../assets/juegos/Minecraft.jpeg");
    this.listadoJuegos.push(juego);
    juego = new Juego("Overwatch", "Blizzard Entertainment", 9.3, "../assets/juegos/Overwatch.jpeg");
    this.listadoJuegos.push(juego);
    juego = new Juego("Fortnite", "Epic Games", 9.2, "../assets/juegos/Fortnite.jpeg");
    this.listadoJuegos.push(juego);
    juego = new Juego("Call of Duty: Modern Warfare", "Infinity Ward", 9.1, "../assets/juegos/Codmw.jpeg");
    this.listadoJuegos.push(juego);
    Juego.contadorId = 1;
  }

  public irDetalle(id : number){
    this.router.navigate([ '/detalle', id]);
  }

  public cerrarSesion(){
    localStorage.removeItem("user");
    this.router.navigate([ '' ]);
  }
  ngOnInit(): void {
  }

}
