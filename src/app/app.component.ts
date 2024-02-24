import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Portafolio';
  navbarClass = 'navbar navbar-expand-md bg-body-tertiary';
  navbarTextClass = 'nav-item nav-link nav-text';

  constructor(private router: Router) {}

  menuOption: string = '';

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verificar la ruta activa y actualizar la clase de la barra de navegación
        this.updateNavbarClass(event.url);
      }
    });
  }

  updateNavbarClass(url: string) {
    if (url.includes('proyects/calculadora')) {
      this.navbarClass = 'navbar navbar-expand-md bg-body-tertiary-calculadora'
      this.navbarTextClass = 'nav-link nav-text-calculadora';
    } else if(url.includes('proyects')) {
      this.navbarClass = 'navbar navbar-expand-md bg-body-tertiary'
      this.navbarTextClass = 'nav-link nav-text';
    }
  }

  onOption(menuOption: string) {
    this.menuOption = menuOption;

    const links = document.querySelectorAll('.navbar a');
    links.forEach((link) => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`.navbar a[routerLink="${menuOption}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}
