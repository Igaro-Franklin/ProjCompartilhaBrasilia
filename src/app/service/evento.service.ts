import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  constructor() {}

  getEventos(): any[] {
    if (typeof window !== 'undefined' && localStorage) {
      return JSON.parse(localStorage.getItem('eventos') || '[]');
    }
    return [];
  }

  salvarEvento(evento: any): void {
    if (typeof window !== 'undefined' && localStorage) {
      const eventos = JSON.parse(localStorage.getItem('eventos') || '[]');
      eventos.push(evento);
      localStorage.setItem('eventos', JSON.stringify(eventos));
    }
  }
}
