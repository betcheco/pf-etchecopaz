import { Component, Input, Output, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  constructor(private router: Router){}

  @Input() title: string = '';
  @Input() buttonText: string = '';
  @Input() linkPath: string = 'home';

  navigateTo() {
    this.router.navigate([this.linkPath])
  }
}
