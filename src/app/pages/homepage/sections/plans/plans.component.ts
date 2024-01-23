import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.less'
})
export class PlansComponent {
  plans: Plan[] = [
    { title: "Starter", users: 3, price: 29 },
    { title: "Standard", users: 20, price: 99 },
    { title: "Premium", users: 200, price: 299 },
  ]

  _selectedIndex: number = 1;
}

interface Plan {
  title: string,
  users: number,
  price: number,
}
