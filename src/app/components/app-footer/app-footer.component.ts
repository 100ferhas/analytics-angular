import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.less'
})
export class AppFooterComponent {
  links: string[] = ["Product", "Pricing", "FAQ", "Blog"];
}
