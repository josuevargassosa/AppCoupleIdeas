import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  standalone: false,
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage {
  nombre: string = "";

  constructor(private router: Router) {}

  continuar() {
    if (this.nombre.trim()) {
      // Guardar el nombre si deseas usarlo globalmente
      this.router.navigateByUrl("/perfil");
    } else {
      alert("Por favor, ingresa tu nombre 😅");
    }
  }
}
