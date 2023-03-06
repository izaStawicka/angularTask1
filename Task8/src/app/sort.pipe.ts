import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform{
    transform(value: any, propName:string) {
       value.s
    }
}