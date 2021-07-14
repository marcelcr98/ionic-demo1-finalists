import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { PlacesService } from '../places.service';
import {Nation} from '../place.model'
import {AlertController} from '@ionic/angular'
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  
  //Modelo
  nation: Nation;

  constructor(
    private activaredRouter: ActivatedRoute, 
    private placesService: PlacesService,
     private router:  Router,
     private alertCtrl: AlertController) { }

  ngOnInit() {

    this.activaredRouter.paramMap.subscribe(paramMap =>{

      const recipeId = paramMap.get('nationId')
      this.nation = this.placesService.getPlace(recipeId);
      console.log(this.nation)
    })
  }

  async deletePlace(){
    

    //mensaje de confirmación
    const alertElement = await this.alertCtrl.create({

      header: '¿Estas seguro de querer eliminar?',
      message:'Se cuidadoso',
      buttons: [
        {
          text:'Cancelar',
          role:'cancel'
        },

        {
          text:'Eliminar',
          handler:()=>{

            this.placesService.deletePlace(this.nation.id);
            //console.log(this.placesService.getPlaces())
             this.router.navigate(["/places"])  


          }
        }
        
      ]
    })

    await alertElement.present()




  }

}
