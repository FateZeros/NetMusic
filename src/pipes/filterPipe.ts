import { Pipe, PipeTransform } from '@angular/core'

/*
 * Self Pipe
*/

@Pipe({ name: 'filter' })
export class filterPipe implements PipeTransform {
  transform(arrList: Array<any> = [], args? : any): Array<any> {
    arrList = arrList.filter(item => {
      if (item.width == args.width) {
        return item
      }
    })
    return arrList
  }
}