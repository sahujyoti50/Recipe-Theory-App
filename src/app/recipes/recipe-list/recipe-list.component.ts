import { Component, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

@Input() recipes:{name:string,description:string,imgPath:string}[]=[];
@Output() getselectedDetails=new EventEmitter<string>;


getDetails(selectedrecipe:any){
this.getselectedDetails.emit(selectedrecipe);
console.log("list",selectedrecipe);
}

}
