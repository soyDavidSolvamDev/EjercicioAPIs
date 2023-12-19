import {Component, OnInit} from '@angular/core';
import {MhwWeaponsService} from "../../services/mhw-weapons.service";
import {InfoApiWeapons, Weapons} from "../../common/interface-weapons";

@Component({
  selector: 'app-mhw-weapons',
  templateUrl: './mhw-weapons.component.html',
  styleUrls: ['./mhw-weapons.component.css']
})
export class MhwWeaponsComponent implements OnInit{
  dataApi!: InfoApiWeapons;
  weapons: Weapons[] = [];
  constructor(private weaponsservice: MhwWeaponsService) {}

  ngOnInit() {
    this.loadWeapons();
  }

  private loadWeapons() {
    this.weaponsservice.getWeapons().subscribe(
      {
        next: datos =>{
          this.dataApi = datos;
          this.weapons = this.dataApi;
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
