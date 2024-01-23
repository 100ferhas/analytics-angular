import { Component } from '@angular/core';
import { AppbarComponent } from '../../components/appbar/appbar.component';
import { MainBannerComponent } from './sections/main-banner/main-banner.component';
import { MainFeaturesComponent } from './sections/main-features/main-features.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { PlansComponent } from './sections/plans/plans.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    AppbarComponent,
    MainBannerComponent,
    MainFeaturesComponent,
    BannerComponent,
    PlansComponent,
    AppFooterComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.less'
})
export class HomepageComponent {

}
