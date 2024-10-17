import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price-page',
  templateUrl: './price-page.component.html',
  styles: ``
})
export class PricePageComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  ngOnInit(): void {
    console.log('HIJO - ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('HIJO -ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('HIJO - ngOnDestroy');
  }

}
