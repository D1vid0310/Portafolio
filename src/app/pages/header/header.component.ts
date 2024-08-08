import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, InicioComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title!: string;

  ngOnInit() {}
}
