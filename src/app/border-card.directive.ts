import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]', // Les crochtes indique que c'est une directive d'attribut
  standalone: true
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { // ElementRef c'est une référence vers l'élément du DOM sur le quel on va appliquer la directive
  this.setHeight(this.defaultHeight);
  this.setBorder(this.initialColor);
  }
  @Input('pokemonBorderCard') borderColor: string;
  //@Input('pokemonBorderCard') : Cette annotation indique qu’une valeur peut être passée à borderColor depuis le template en utilisant l'attribut pokemonBorderCard. Le nom entre parenthèses, 'pokemonBorderCard', est un alias ; il permet d'utiliser le nom pokemonBorderCard dans le template pour passer une valeur, même si la propriété en TypeScript s'appelle borderColor.
  //borderColor: string : Cette propriété stocke la couleur passée dans le template (ici, red).

    @HostListener('mouseenter') onMouseEnter(){
      this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave(){
      this.setBorder(this.initialColor);
    }

    private setHeight(height: number){
      this.el.nativeElement.style.height = `${height}px`;
    }
    private setBorder(color: string){
      let border = `solid 4px ${color}`;
      this.el.nativeElement.style.border = border;
    }

}
