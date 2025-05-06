import { Component, Input } from "@angular/core";

@Component({
    selector:'us-table',
    templateUrl:'./table.component.html',
    styleUrls:['./table.component.css']
})
export class tableComponent{

    @Input() dataArr:any[]=[
        {Name:'vijay',Age:30,},
        {name:'sachin',age:24}
    ];
    originalOrder=(a:any,b:any):number=>0;

}