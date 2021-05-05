import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isShowing = false;
  constructor() { }

  ngOnInit(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function handler(e): void {
        e.preventDefault();
        const target = e.currentTarget as HTMLElement;
        const attr = target.getAttribute(`href`);
        if (attr) {
          document.querySelectorAll(attr)[0].scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }
  toggleShow(event: any): boolean {
    if (
      (event.type === 'click' && event.target.tagName.toLowerCase() !== 'button')
    ) {
      this.isShowing = !this.isShowing;
    }
    return this.isShowing;
  }

}
