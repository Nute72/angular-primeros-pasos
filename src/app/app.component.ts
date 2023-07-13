import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   // Definimos el array
   peliculas = [
    {
        "pelicula": "Batman vs Superman",
        "director": "Zack Snider",
        "anio": "2016"
    },
    {
        "pelicula": "La verdad duele",
        "director": "Will Smith",
        "anio": "2015"
    },
    {
        "pelicula": "Una historia real",
        "director": "Desconocido",
        "anio": "2014"
    }];

  // addTodo(){
  //   if(this.todo!==""){
  //     this.todoArray.push(this.todo)
  //     console.log(this.todo) 
  //   }else{
  //     alert('Field required **')
  //   }
      
  // }

  /*delete item*/
  // deleteItem(elem: any){
  // 	for(let i=0 ;i<= this.todoArray.length ;i++){
  // 		if(elem== this.todoArray[i]){
  // 			this.todoArray.splice(i,1)
  // 		}
  // 	}
  // }

  // submit Form
  // todoSubmit(value:any){
  //    if(value!==""){
  //   this.todoArray.push(value.todo)
  //   }else{
  //     alert('Field required **')
  //   }
    
  // }
 
}
