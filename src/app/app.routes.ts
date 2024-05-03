import { Routes } from '@angular/router';
import { VisualComponent} from './visual/visual.component';
import { HomeComponent } from './home/home.component';
import { TableauEmbeddedVizComponent } from './tableau-embedded-viz/tableau-embedded-viz.component';


export const routes: Routes = [

    {path: 'visual', component: VisualComponent},
    {path: '', component: HomeComponent},
    {path: "tableau", component: TableauEmbeddedVizComponent}

];
