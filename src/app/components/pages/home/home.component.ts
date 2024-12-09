import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoService } from '../../../service/evento.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  eventos: any[] = []; // Lista de eventos

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.eventos = this.eventoService.getEventos().map(evento => ({
      ...evento,
    data: new Date(evento.data)
    }));
  }
}
