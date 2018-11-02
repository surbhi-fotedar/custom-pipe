import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"exponentialStrength"
})

export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: string, fallback: string): string {
    let image = "";
    if (value) {
      image = value;
    } else {
      image = fallback;
    }
     return image;
  }
}

// export class ExponentialStrengthPipe implements PipeTransform {
//   transform(value: number, exponent?: string): number {
//     let exp = parseFloat(exponent);
//     return Math.pow(value, isNaN(exp) ? 1 : exp);
//   }
// }