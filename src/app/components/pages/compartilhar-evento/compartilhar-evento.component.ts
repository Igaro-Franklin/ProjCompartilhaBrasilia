import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventoService } from '../../../service/evento.service';

@Component({
  selector: 'app-compartilhar-evento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compartilhar-evento.component.html',
  styleUrl: './compartilhar-evento.component.css'
})
export class CompartilharEventoComponent {

  evento = {
    nome: '',
    descricao: '',
    data:'',
    capa: '',
  }

  constructor(private eventoService: EventoService, private router: Router) {}

  carregarImagem(event: any): void{
    const file = event.target.files[0];

    if (file){
      const reader = new FileReader()

      reader.onload = (e: any) => {
        this.evento.capa = e.target.result
      }

      reader.readAsDataURL(file)
    }
  }

  salvarEvento(): void{

    if(!this.evento.nome || !this.evento.descricao || !this.evento.data || !this.evento.capa){
      alert("Preencha todos os campos antes de compartilhar o evento!!!")
      return
    }

    this.eventoService.salvarEvento(this.evento);
    alert('Evento salvo com sucesso!');
    this.router.navigate(['/']);
  }

  redirecionar(): void {
    this.router.navigate(['/'])
  }

}
