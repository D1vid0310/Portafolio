import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css',
})
export class InformacionComponent {
  descargarCV() {
    const link = document.createElement('a');
    link.href = 'assets/mi_cv.pdf';
    link.download = 'mi_cv.pdf';
    link.click();
  }
}
