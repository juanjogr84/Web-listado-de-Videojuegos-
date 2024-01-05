import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidades/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listaUsuarios : Usuario[] = [];

  //Datos recogidos del formulario
  user : string = "";
  pass : string = "";
  

  mensajeErrorOculto = false;

  constructor(private router:Router) { 
    let usuario : Usuario = new Usuario("felix", "1234");
    this.listaUsuarios.push(usuario)
    usuario = new Usuario("miguel", "1235");
    this.listaUsuarios.push(usuario);
  }

  public validarForm(){
    let usuarioEncontrado = false;

    for (let i = 0; i < this.listaUsuarios.length; i++){
      if(this.listaUsuarios[i].user == this.user && this.listaUsuarios[i].password == this.pass){
        usuarioEncontrado = true;
        break;
      }
        
    }

    if(usuarioEncontrado) {
      this.mensajeErrorOculto = false;
      localStorage.setItem("user", this.user);
      this.router.navigate([ '/home', this.user]);
    } else {
      this.mensajeErrorOculto = true;
    }
  }

  ngOnInit(): void {
    localStorage.removeItem("user")
  }

}
