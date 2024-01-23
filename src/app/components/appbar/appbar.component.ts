import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'appbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.less'
})
export class AppbarComponent {
  items: string[] = ['Products', 'Pricing', 'FAQ', 'Blog'];
  selectedIndex = 0;
}
