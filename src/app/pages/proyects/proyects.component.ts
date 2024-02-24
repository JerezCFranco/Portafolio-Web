import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterLink],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css',
})
export class ProyectsComponent {

  menuOption: string = '';

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }
}
