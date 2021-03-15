import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  dataPokemon
  constructor(  
    @Inject(MAT_DIALOG_DATA) public data)  { 
    this.dataPokemon = data
  }

  ngOnInit(): void {

  }

}
