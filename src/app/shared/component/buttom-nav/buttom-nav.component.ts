import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttom-nav',
  standalone: true,
  imports: [],
  templateUrl: './buttom-nav.component.html',
  styles: ``
})
export class ButtomNavComponent {
  @Input() title : String = ""

  
}
