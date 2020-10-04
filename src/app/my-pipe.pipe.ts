import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: number, arg: number): number {
    return value % arg;
  }
}
