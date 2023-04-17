import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input() recipe:any;
@Output() getDetails=new EventEmitter<string>;

onSelect(){
this.getDetails.emit(this.recipe);
console.log(this.recipe);
}

}