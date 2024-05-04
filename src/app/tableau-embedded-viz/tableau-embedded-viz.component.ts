import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-tableau-embedded-viz',
  standalone: true,
  imports: [],
  templateUrl: './tableau-embedded-viz.component.html',
  styleUrl: './tableau-embedded-viz.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TableauEmbeddedVizComponent implements OnInit{
  constructor(){}

  // Inherit attributes from the parent component
  @Input() dashboardIndex = 0;
  @Input() toolbar = 'hidden';
  @Input() vizUrl = '';

  // Dashboard properties
  public VizIndex = 'Tableau-Viz-' + this.dashboardIndex;

  ngOnInit(): void {
  }
}
