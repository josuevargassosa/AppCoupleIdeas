import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PerfilPageRoutingModule } from "./perfil-routing.module";

import { PerfilPage } from "./perfil.page";
import { PreguntaCardComponent } from "src/app/components/pregunta-card/pregunta-card.component";
import { AgregarPreguntaModalComponent } from "src/app/components/agregar-pregunta-modal/agregar-pregunta-modal.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PerfilPageRoutingModule],
  declarations: [
    PerfilPage,
    PreguntaCardComponent,
    AgregarPreguntaModalComponent,
  ],
})
export class PerfilPageModule {}
