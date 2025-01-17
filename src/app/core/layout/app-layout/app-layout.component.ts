import { Component, inject } from '@angular/core';
import { LayoutService } from '../layout.service';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css'
})
export class AppLayoutComponent {

  private layoutService = inject(LayoutService);

  get containerClass() {
    return {
        'layout-theme-light': this.layoutService.config().colorScheme === 'light',
        'layout-theme-dark': this.layoutService.config().colorScheme === 'dark',
    }
}

}
