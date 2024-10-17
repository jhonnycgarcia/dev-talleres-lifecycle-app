import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styles: ``
})
export class ProductPageComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  public isProductVisible: boolean = true;
  public currentPrice: number = 0;

  constructor() {
    console.log('PADRE constructor');
  }

  ngOnInit(): void {
    console.log('PADRE ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PADRE ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('PADRE ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('PADRE ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('PADRE ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('PADRE ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('PADRE ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('PADRE ngOnDestroy');
  }

  increasePrice(): void {
    this.currentPrice += 10;
  }

}
