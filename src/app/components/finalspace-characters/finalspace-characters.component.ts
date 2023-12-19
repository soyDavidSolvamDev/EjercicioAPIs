import {Component, OnInit} from '@angular/core';
import {CharacterFS, InfoApiFS} from "../../common/interface-fs";
import {FinalSpaceService} from "../../services/final-space.service";

@Component({
  selector: 'app-finalspace-characters',
  templateUrl: './finalspace-characters.component.html',
  styleUrls: ['./finalspace-characters.component.css']
})
export class FinalspaceCharactersComponent implements OnInit{

  dataApi!: InfoApiFS;
  characters: CharacterFS[] = [];

  constructor(private fsservice: FinalSpaceService) {
  }

  ngOnInit() {
    this.loadCharactersFS();
  }

  private loadCharactersFS() {
    this.fsservice.getCharacterFS().subscribe(
      {
        next: datos => {
          this.dataApi = datos;
          this.characters = this.dataApi;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Done');
        }
      }
    )
  }
}
