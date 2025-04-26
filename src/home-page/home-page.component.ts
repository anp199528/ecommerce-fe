import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  featuredProducts = [
    { name: 'Smartphone X200', price: 499.99, image: 'images/phone.jpg' },
    { name: 'Stylish Watch', price: 149.99, image: 'images/phone.jpg' },
    { name: 'Noise Cancelling Headphones', price: 199.99, image: 'images/phone.jpg' },
    { name: 'Running Shoes', price: 89.99, image: 'images/phone.jpg' },
  ];
}
