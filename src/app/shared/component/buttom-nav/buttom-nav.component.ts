import { NgClass } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-buttom-nav',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './buttom-nav.component.html',
  styles: ``
})
export class ButtomNavComponent {
  @Input() title : String = ""
  @Input() path: string = "";

  constructor(private router : Router){}

  get isActive(): boolean {
    return this.router.url === this.path;
  }
}
