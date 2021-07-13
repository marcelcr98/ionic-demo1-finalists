import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { PlacesService } from '../places.service';
import {Nation} from '../place.model'
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  nation: Nation;

  constructor(private activaredRouter: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {

    this.activaredRouter.paramMap.subscribe(paramMap =>{

      const recipeId = paramMap.get('nationId')
      this.nation = this.placesService.getPlace(recipeId);
      console.log(this.nation)
    })
  }

}
