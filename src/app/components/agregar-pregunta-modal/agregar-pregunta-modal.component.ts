import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PreguntaService } from "src/app/services/pregunta.service";

@Component({
  standalone: false,
  selector: "app-agregar-pregunta-modal",
  templateUrl: "./agregar-pregunta-modal.component.html",
  styleUrls: ["./agregar-pregunta-modal.component.scss"],
})
export class AgregarPreguntaModalComponent {
  nuevaPregunta: string = "";

  constructor(
    private modalCtrl: ModalController,
    private preguntaService: PreguntaService
  ) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }

  guardar() {
    if (this.nuevaPregunta.trim()) {
      this.preguntaService.agregarPregunta(this.nuevaPregunta);
      this.modalCtrl.dismiss();
    }
  }
}
