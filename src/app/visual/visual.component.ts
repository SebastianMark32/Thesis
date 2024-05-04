import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { TableauEmbeddedVizComponent } from '../tableau-embedded-viz/tableau-embedded-viz.component';
declare const window: any;

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css'],
  standalone: true,
  imports: [
    FormsModule,  
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    TableauEmbeddedVizComponent
  ]
})
export class VisualComponent {

  selectedGraph: string = ''; 
  showTableauViz: boolean = false;

  graph1Url = 'https://public.tableau.com/views/DayStrainVSSleepPerfomance/DayStrainVSSleepPerformance?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link';
  
}

