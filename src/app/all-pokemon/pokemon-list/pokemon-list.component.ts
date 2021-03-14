import { PokemonDetailComponent } from './../pokemon-detail/pokemon-detail.component';
import { SharedService } from './../../services/shared.service';
import { GetAllPokemonService } from './../async/get-all-pokemon.service';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import {MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

export interface pokemonTable {
  id: number,
  name: string,
  action:string,
  type: string
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  initColumns = [
    { key: "id", value: "ID"},
    { key: "name", value: "Nombre"},
    { key: "type", value: "Tipo"},
    { key: "action", value: "Acciones"},
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: any[] = this.initColumns.map(col => col.key);
  dataSource = new MatTableDataSource<pokemonTable>([]);
  mobileBoolean: boolean;
  constructor(

    private getPokemonS  : GetAllPokemonService,
    private isMobile  : SharedService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

   this.getAllPokemons();

  }

  ngDoCheck(){
    //this.mobileBoolean = this.isMobile.detectMob()
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filterByColumn(){
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.type.toLowerCase().includes(filter);
    };
  }

  getAllPokemons(){
    this.getPokemonS.getPokemons().subscribe(
      response => {
   

        if(response.results!= null){

          let fixedData = []

          response.results.forEach(element => {
           
           
            this.getPokemonS.getPokemonDetail(element.url).subscribe(
              response=> {
               
                if(response!=null){

                  let allPokemons: pokemonTable = {
                  
                  
                    id: response.id,
                    name: element.name,
                    type: this.fixedType(response.types),                 
                    action: "info",

                    
                  };
                
        
                  fixedData.push(allPokemons);
                  this.dataSource = new MatTableDataSource<pokemonTable>(fixedData.slice());
                  this.dataSource.paginator = this.paginator;
              
                }
                this.dataSource.sort = this.sort;
                this.filterByColumn();
              });
                
               

                }
              
            )
          
            
        }

      }
     
    )
   
  }

  fixedType(types){
    console.log(types)

    let fix = [];
    types.forEach((element,index) => {
     
      fix.push(element.type.name)
      console.log()
    });

    return fix.join(",")

  }

  public pokemonDetail(pokemon) {
    const dialogRef = this.dialog.open(PokemonDetailComponent, {
      width: '75%',
      panelClass: 'app-full-bleed-dialog',
      data: { pokemon },
    });


  }


}
