import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';
import { ButtomNavComponent } from '../component/buttom-nav/buttom-nav.component';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [RouterLink,ButtomNavComponent],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  menu = [{
    path: "/admin/dashboard",
    title: "Dashboard"
  },
  {
    path: "/admin/order",
    title: "Lista Ordenes"
  },
  ]
}
