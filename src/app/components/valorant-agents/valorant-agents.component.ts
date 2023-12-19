import {Component, OnInit} from '@angular/core';
import {AgentsVA, InfoApiVA} from "../../common/interface-va";
import {ValorantagentsService} from "../../services/valorantagents.service";

@Component({
  selector: 'app-valorant-agents',
  templateUrl: './valorant-agents.component.html',
  styleUrls: ['./valorant-agents.component.css']
})
export class ValorantAgentsComponent implements OnInit{
  dataApi!: InfoApiVA;
  agents: AgentsVA[] =[];

  constructor(private vaservice: ValorantagentsService) {
  }

  ngOnInit() {
    this.loadAgents();
  }

  private loadAgents() {
    this.vaservice.getAgents().subscribe(
      {
        next: datos =>{
          this.dataApi = datos;
          this.agents = this.dataApi.data;
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
