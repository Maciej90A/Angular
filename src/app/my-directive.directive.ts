import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseenter')
  // tslint:disable-next-line:typedef
  onMouseEnter() {
    this.setBgColor('yellow');
  }

  @HostListener('mouseleave')
  // tslint:disable-next-line:typedef
  onMauseLeave() {
    this.setBgColor('white');
  }


  // tslint:disable-next-line:typedef
  private setBgColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }


}
