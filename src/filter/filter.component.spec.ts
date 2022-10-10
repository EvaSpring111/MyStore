import { TestBed, async } from '@angular/core/testing';
import { PriceFilterPipe } from 'src/filters/filter-price.pipe';
import { FilterPipe } from 'w-ng5';

describe('Pipe: Filter', () => {
  it('create an instance', () => {
    let pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
