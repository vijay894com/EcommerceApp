import { Component } from "@angular/core";

@Component({
    selector:'table-pagination',
    template:`
    <div class="row">
  <div class="col">
    <span>1</span> of <span>40</span> <span>pages</span>
  </div>
  <div class="col">
    <span class="arrow left">&lt;</span>
    <span class="arrow right">&gt;</span>
  </div>
</div>

    `,
    styleUrls:['./pagination.component.css']
})
export class PaginationComponent{

}