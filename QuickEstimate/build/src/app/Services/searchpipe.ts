import { PipeTransform, Pipe } from '@angular/core';

import { ITask } from './tableitem';

@Pipe ({
    name: 'SearchPipeFilter'
})

export class SearchPipe implements PipeTransform {
    transform(value: ITask[], filterBy: string): ITask[] {
        
        filterBy=filterBy ? filterBy .toLocaleLowerCase() : null;
        return filterBy ? value.filter((task : ITask)=>
        task.projId.toLocaleLowerCase().indexOf(filterBy) !==-1) : value;
   
    }
} 
