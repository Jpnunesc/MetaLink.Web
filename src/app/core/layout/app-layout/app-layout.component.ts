import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
  standalone: false
})
export class AppLayoutComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  activeRouter(route: string): boolean {
    const active = this.router.url.includes(route);
    return active;
  }
}
