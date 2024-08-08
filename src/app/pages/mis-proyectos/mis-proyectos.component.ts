import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-mis-proyectos',
  standalone: true,
  imports: [
    CommonModule,
    ThemeDirective,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    NgFor,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink,
  ],
  templateUrl: './mis-proyectos.component.html',
  styleUrl: './mis-proyectos.component.css',
})
export class MisProyectosComponent {
  NextjsProyect: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });
  AngularProyect: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.NextjsProyect[0] = {
      image: 'Nextjs1.png',
      thumbImage: 'Nextjs1.png',
      title: 'Login',
    };
    this.NextjsProyect[1] = {
      image: 'Nextjs2.png',
      thumbImage: 'Nextjs2.png',
      title: 'Recuperar Contraseña',
    };
    this.NextjsProyect[2] = {
      image: 'Nextjs3.png',
      thumbImage: 'Nextjs3.png',
      title: 'Registro',
    };
    this.NextjsProyect[3] = {
      image: 'Nextjs4.png',
      thumbImage: 'Nextjs4.png',
      title: 'Listado Producto / Cuenta',
    };
    this.NextjsProyect[4] = {
      image: 'Nextjs5.png',
      thumbImage: 'Nextjs5.png',
      title: 'Crear Producto',
    };
    this.NextjsProyect[5] = {
      image: 'Nextjs6.png',
      thumbImage: 'Nextjs6.png',
      title: 'Actualizar Producto',
    };
    this.NextjsProyect[6] = {
      image: 'Nextjs7.png',
      thumbImage: 'Nextjs7.png',
      title: 'Eliminar Producto',
    };
    this.NextjsProyect[7] = {
      image: 'Nextjs8.png',
      thumbImage: 'Nextjs8.png',
      title: 'Conversion de $ A bS',
    };
    this.AngularProyect[0] = {
      image: 'Angular1.png',
      thumbImage: 'Angular1.png',
      title: 'Login',
    };
    this.AngularProyect[1] = {
      image: 'Angular2.png',
      thumbImage: 'Angular2.png',
      title: 'Recuperar Contraseña',
    };
    this.AngularProyect[2] = {
      image: 'Angular3.png',
      thumbImage: 'Angular3.png',
      title: 'Registro',
    };
    this.AngularProyect[3] = {
      image: 'Angular4.png',
      thumbImage: 'Angular4.png',
      title: 'Perfil',
    };
    this.AngularProyect[4] = {
      image: 'Angular5.png',
      thumbImage: 'Angular5.png',
      title: 'Crear Producto',
    };
    this.AngularProyect[5] = {
      image: 'Angular6.png',
      thumbImage: 'Angular6.png',
      title: 'Listado Producto',
    };
    this.AngularProyect[6] = {
      image: 'Angular7.png',
      thumbImage: 'Angular7.png',
      title: 'Actualizar / Eliminar Producto',
    };
  }
}
