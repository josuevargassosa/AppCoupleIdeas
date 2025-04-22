import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Pregunta } from "../models/pregunta.model";

@Injectable({
  providedIn: "root",
})
export class PreguntaService {
  private preguntas$: BehaviorSubject<Pregunta[]> = new BehaviorSubject([
    {
      id: 1,
      texto: "¿Videojuego favorito?",
      respuestas: [
        { autor: "Nicole", texto: "Resident Evil", color: "#f9c4e1" },
        { autor: "Josue", texto: "Obviamente Call of duty", color: "#bccdfd" },
      ],
    },
    {
      id: 2,
      texto: "¿Tu heladería favorita?",
      respuestas: [],
    },
  ]);

  getPreguntas() {
    return this.preguntas$.asObservable();
  }

  agregarPregunta(texto: string) {
    const actual = this.preguntas$.value;
    const nueva: Pregunta = {
      id: Date.now(),
      texto,
      respuestas: [],
    };
    this.preguntas$.next([...actual, nueva]);
  }

  eliminarPregunta(id: number) {
    const actual = this.preguntas$.value.filter((p) => p.id !== id);
    this.preguntas$.next(actual);
  }
}
