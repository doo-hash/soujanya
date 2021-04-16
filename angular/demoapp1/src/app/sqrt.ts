import {Pipe,PipeTransform} from '@angular/core';
import { pipe } from 'rxjs';
@Pipe({
    name:'sqrt'
})
export class Sqrt {
    transform(val:number):number{
        return Math.sqrt(val);
    }
}
