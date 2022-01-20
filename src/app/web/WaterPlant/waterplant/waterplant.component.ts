import { Component, OnInit } from '@angular/core';
import { WaterplantService } from '../waterplant.service';
import { Plant } from './Plant';

@Component({
  selector: 'app-waterplant',
  templateUrl: './waterplant.component.html',
  styleUrls: ['./waterplant.component.css']
})
export class WaterplantComponent implements OnInit {

  plantData!: Plant[];

    constructor(public plantService: WaterplantService) { }
    ngOnInit(){
      this.loadDashboard();
      
    }
    loadDashboard() {
        this.plantService.getDashboardData().subscribe((data:any) => { this. plantData = data });;
    }


}
