import { Component, OnInit } from "@angular/core";
import { PreguntaService } from "src/app/services/pregunta.service";
import { Pregunta } from "src/app/models/pregunta.model";
import { ModalController } from "@ionic/angular";
import { AgregarPreguntaModalComponent } from "src/app/components/agregar-pregunta-modal/agregar-pregunta-modal.component";

@Component({
  standalone: false,
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"],
})
export class PerfilPage implements OnInit {
  preguntas: Pregunta[] = [];
  filtro: string = "";

  constructor(
    private preguntaService: PreguntaService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.preguntaService.getPreguntas().subscribe((data) => {
      this.preguntas = data;
    });
  }

  preguntasFiltradas() {
    return this.preguntas.filter((p) =>
      p.texto.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: AgregarPreguntaModalComponent,
    });
    await modal.present();
  }

  eliminarPregunta(id: number) {
    this.preguntaService.eliminarPregunta(id);
  }
}
