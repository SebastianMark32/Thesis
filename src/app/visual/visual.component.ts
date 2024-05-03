import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
export class VisualComponent implements OnInit, AfterViewInit {
  graph1: boolean = false;
  graph2: boolean = false;
  graph3: boolean = false;
  graph4: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTableauScript();
    }
  }

  private loadTableauScript() {
    if (window.tableau) {
      this.initTableau();
    } else {
      const script = this.renderer.createElement('script');
      script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
      script.onload = () => {
        this.initTableau();
      };
      script.onerror = () => {
        console.error('Script loading failed.');
      };
      this.renderer.appendChild(document.head, script);
    }
  }

  private initTableau(): void {
    if (window.tableau) {
      const vizUrl = 'https://public.tableau.com/views/DayStrainVSSleepPerfomance/DayStrainVSSleepPerformance';
      const options = {
        width: '100%',
        height: '500px',
        onFirstInteractive: function() {
          console.log('Tableau visualization is interactive.');
        }
      };
      new window.tableau.Viz(this.el.nativeElement.querySelector('#viz1714176135384'), vizUrl, options);
    } else {
      console.error('Tableau is not defined.');
    }
  }
}
