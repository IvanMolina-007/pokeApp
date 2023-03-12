import { Injectable } from '@angular/core';
import { Hobbie } from '../interfaces/hobbies.interface';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  constructor() { }

  public hobbies:Hobbie[] = [
    {"id": 1, "name": "Aprender un nuevo idioma"},
    {"id": 2, "name": "Bailar"},
    {"id": 3, "name": "Cocinar"},
    {"id": 4, "name": "Dibujar"},
    {"id": 5, "name": "Escalar"},
    {"id": 6, "name": "Fotografía"},
    {"id": 7, "name": "Guitarra"},
    {"id": 8, "name": "Hacer puzzles"},
    {"id": 9, "name": "Ir al cine"},
    {"id": 10, "name": "Jugar ajedrez"},
    {"id": 11, "name": "Kitesurf"},
    {"id": 12, "name": "Leer"},
    {"id": 13, "name": "Montar en bicicleta"},
    {"id": 14, "name": "Nadar"},
    {"id": 15, "name": "Observar aves"},
    {"id": 16, "name": "Pintar"},
    {"id": 17, "name": "Quesería"},
    {"id": 18, "name": "Reciclaje"},
    {"id": 19, "name": "Salir a correr"},
    {"id": 20, "name": "Tejer"},
    {"id": 21, "name": "Tocar un instrumento musical"},
    {"id": 22, "name": "Hacer manualidades"},
    {"id": 23, "name": "Cantar"},
    {"id": 24, "name": "Practicar yoga"},
    {"id": 25, "name": "Hacer deportes al aire libre"},
    {"id": 26, "name": "Ver películas y series"},
    {"id": 27, "name": "Jugar videojuegos"},
    {"id": 28, "name": "Viajar y conocer nuevos lugares"},
    {"id": 29, "name": "Hacer jardinería"},
    {"id": 30, "name": "Hacer barbacoas"},
    {"id": 31, "name": "Aprender a hacer cocteles"},
    {"id": 32, "name": "Bucear y hacer snorkel"},
    {"id": 33, "name": "Ir a conciertos"},
    {"id": 34, "name": "Hacer ejercicios de meditación"},
    {"id": 35, "name": "Hacer manualidades con madera"},
    {"id": 36, "name": "Levantar pesas"},
    {"id": 37, "name": "Tocar deportes en equipo"},
    {"id": 38, "name": "Realizar experimentos científicos"},
    {"id": 39, "name": "Jugar fútbol"},
    {"id": 40, "name": "Hacer esculturas"},
    {"id": 41, "name": "Visitar museos"},
    {"id": 42, "name": "Hacer acrobacias"},
    {"id": 43, "name": "Hacer fotografía nocturna"},
    {"id": 44, "name": "Hacer grafiti"},
    {"id": 45, "name": "Aprender a bailar salsa"},
    {"id": 46, "name": "Hacer surf"},
    {"id": 47, "name": "Participar en carreras de obstáculos"},
    {"id": 48, "name": "Hacer manualidades con papel maché"},
    {"id": 49, "name": "Jugar voleibol"},
    {"id": 50, "name": "Jugar basquetball"},
    {"id": 51, "name": "Jugar Tennis"},
    {"id": 52, "name": "Jugar Fifa"},
    {"id": 53, "name": "Ver peliculas"},
    {"id": 54, "name": "Ver tele"},
    {"id": 54, "name": "Ver series"},
    {"id": 54, "name": "Ver netflix"},
  ]
}
