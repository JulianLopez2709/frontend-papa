import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FotterComponent } from '../fotter/fotter.component';
import { SlideComponent } from '../slide/slide.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FotterComponent, SlideComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
