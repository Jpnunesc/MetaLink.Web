import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css',
  standalone: false
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  ngOnInit() {

  }
}
