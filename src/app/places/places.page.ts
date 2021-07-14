import { Component, OnInit } from '@angular/core';
import {PlacesService} from './places.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  nations = []
  
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.nations=this.placeService.getPlaces()
    console.log(this.nations)

   

    }

    ionViewWillEnter(){

      this.nations= this.placeService.getPlaces();
 
     


  }

}
