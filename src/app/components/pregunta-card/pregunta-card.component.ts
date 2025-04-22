import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Pregunta } from "src/app/models/pregunta.model";

@Component({
  standalone: false,
  selector: "app-pregunta-card",
  templateUrl: "./pregunta-card.component.html",
  styleUrls: ["./pregunta-card.component.scss"],
})
export class PreguntaCardComponent {
  @Input() pregunta!: Pregunta;
  @Output() eliminar = new EventEmitter<number>();

  abierto: boolean = false;

  toggle() {
    this.abierto = !this.abierto;
  }
}
