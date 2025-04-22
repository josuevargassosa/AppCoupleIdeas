export interface Respuesta {
  autor: string;
  texto: string;
  color: string; // hex o clase css
}

export interface Pregunta {
  id: number;
  texto: string;
  respuestas: Respuesta[];
}
