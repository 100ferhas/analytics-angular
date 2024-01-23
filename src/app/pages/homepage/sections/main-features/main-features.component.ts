import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-features',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './main-features.component.html',
  styleUrl: './main-features.component.less'
})
export class MainFeaturesComponent {
  features: Feature[] = [
    { icon: "assets/images/monitoring.svg", title: "Monitoring 24/7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat." },
    { icon: "assets/images/widget.svg", title: "Widget System", description: "Sapien in etiam vitae nibh nunc mattis imperdietsed nullam. Vitae et, tortor pulvinar risus pulvinar." },
    { icon: "assets/images/performance.svg", title: "Best Performance", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat." },
  ]
}

interface Feature {
  icon: string,
  title: string,
  description: string,
}
