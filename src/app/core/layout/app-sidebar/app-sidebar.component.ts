import { Component, ElementRef, inject } from '@angular/core';
import { LayoutService } from '../layout.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.css'
})
export class AppSidebarComponent {
  public layoutService = inject(LayoutService);
  public el = inject(ElementRef);
}
