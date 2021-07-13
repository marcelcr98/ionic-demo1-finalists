import { Injectable } from '@angular/core';
import {Nation} from './place.model'
@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private nations =[
    {
      id : '1',
      title:'Italia',
      imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJPO1qQIKdAzoS03wqALCx6MLXC1NZsAvtGKQe7Uvkg--NhvTsgEQqD4vGjf4EWSkHcQ&usqp=CAU',
      escudo: 'https://e00-especiales-marca.uecdn.es/eurocopa/images/escudos/ita.png',
      comments: ['Campeón Euro 2020','Ganadas: 2']

    },

    {
      id : '2',
      title:'Argentina',
      imageURL:'https://cdn.countryflags.com/thumbs/argentina/flag-3d-round-250.png',
      escudo:'https://i.pinimg.com/originals/42/4d/2a/424d2a0ff39c1dfca35946387d58c57d.png',
      comments: ['Campeón Copa América 2021','Ganadas: 15 ']
      
    },

    {
      id : '3',
      title:'Inglaterra',
      imageURL:'https://adosey.com/wp-content/uploads/2020/09/inglaterra.png',
      escudo:'https://images.vexels.com/media/users/3/152424/isolated/preview/bdb681b6c068366fc029601cb5e7f7d2-logotipo-del-equipo-de-futbol-de-inglaterra.png',
      comments: ['Subcampeón Euro 2020','Ganadas: 0']

    },

    {
      id : '4',
      title:'Brasil',
      imageURL:'https://cdn.pixabay.com/photo/2013/07/12/15/50/brazil-150403_1280.png',
      escudo: 'https://1.bp.blogspot.com/-Dz1pOrrDLUY/X_Ueo1dZB_I/AAAAAAAAnz0/vawHhWEXanIKm5cSqjYFQ-K8AaV8Og7vgCLcBGAsYHQ/s512/escudo1.png',
      comments: ['Subcampeón Copa América 2021','Ganadas: 10']
      
    }
  ]


  constructor() { }

  getPlaces(){

    return [...this.nations]

  }

  getPlace(nationId:string){

    return{
      ...this.nations.find(nation=>{
        return nation.id === nationId
  
      })
    }

  }



  addPlace(title: string, escudo:string, imageURL: string){

    this.nations.push({

      title,
      imageURL,
      escudo,
      comments:[],
      id:this.nations.length+1+""
    });



  }

  deletePlace(nationId:string){

    this.nations=this.nations.filter(nation =>{
      return nation.id !== nationId
    })



  }


}
