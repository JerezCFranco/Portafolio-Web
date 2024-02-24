import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  pantallaValor: string = '';

  // Método para agregar valores a la pantalla
  agregar(valor: string): void {
    this.pantallaValor += valor;
  }

  // Método para borrar la pantalla
  borrar(): void {
    this.pantallaValor = '';
  }

  borrarUltimo(): void {
    if (this.pantallaValor.length > 0) {
      this.pantallaValor = this.pantallaValor.slice(0, -1);
    }
  }

  // Método para realizar el cálculo
  calcular(): void {
    try {
      const resultado = new Function('return ' + this.pantallaValor)();
      this.pantallaValor = resultado.toString();
    } catch (error) {
      console.error('Error en el cálculo:', error);
    }
  }

}
