import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price-page',
  templateUrl: './price-page.component.html',
  styles: ``
})
export class PricePageComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('HIJO - ngOnInit');

    this.interval$ = interval(1000).subscribe((value) => {
      console.log('HIJO Tick:', value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('HIJO -ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('HIJO - ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
