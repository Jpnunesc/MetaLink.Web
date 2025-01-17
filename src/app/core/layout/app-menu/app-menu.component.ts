import { Component, inject, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];
  layoutService = inject(LayoutService);

  ngOnInit() {

  }
}
