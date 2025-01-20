import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Location} from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrl: './app-topbar.component.css',
  standalone: false
})
export class AppTopBarComponent {


  public isCollapsed = true;
  @ViewChild("app-topbar", {static: false}) button!: ElementRef;

  constructor(location:Location, private renderer: Renderer2, private element : ElementRef, private router: Router) {

  }

  ngOnInit(){

  }

}
