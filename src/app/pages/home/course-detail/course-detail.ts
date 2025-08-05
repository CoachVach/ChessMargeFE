import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './course-detail.html',
  styleUrls: ['./course-detail.scss'],
  standalone: false
})
export class CourseDetail {
  courses = [
    {
      title: 'Ajedrez desde cero',
      imgClass: 'chess-init',
      level: 'principiante',
      description: 'Para quienes quieren aprender desde lo más básico: reglas, movimientos, mates sencillos. Ideal para niños y adultos sin experiencia.'
    },
    {
      title: 'Tácticas esenciales',
      imgClass: 'chess-tactics',
      level: 'principiante',
      description: 'Descubre las combinaciones tácticas clásicas y aprende a calcular y anticipar jugadas con ejercicios prácticos.'
    },
    {
      title: 'Estrategias intermedias',
      imgClass: 'chess-strategy',
      level: 'intermedio',
      description: 'Mejora tu comprensión del juego posicional, estructuras de peones, desarrollo de piezas y conceptos clave del medio juego.'
    },
    {
      title: 'Finales ganadores',
      imgClass: 'chess-endgames',
      level: 'intermedio',
      description: 'Domina los finales teóricos más frecuentes y aprende las técnicas modernas de remate y defensa.'
    },
    {
      title: 'Ajedrez avanzado',
      imgClass: 'chess-pro',
      level: 'avanzado',
      description: 'Pensado para jugadores con experiencia que buscan elevar su nivel competitivo y comprender partidas de alto nivel. Incluye análisis guiados.'
    },
    {
      title: 'Entrenamiento maestros',
      imgClass: 'chess-masters',
      level: 'pro',
      description: 'Clases élite para preparación de torneos, repertorio, psicología deportiva, análisis profundo con la WCM Marjorie Herrera.'
    }
  ];
}