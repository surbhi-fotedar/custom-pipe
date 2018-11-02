import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"summary"
})

export class summaryPipe implements PipeTransform {
  transform(msg: string, chars?: number): string {
    let finalmsg = '';
    return msg.substring(0,chars).concat(' ','...');
  }
}