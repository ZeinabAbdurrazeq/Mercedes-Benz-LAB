import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: true
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    const last4 = value.slice(-4);
    return '**** - **** - **** - ' + last4;
  }
}
