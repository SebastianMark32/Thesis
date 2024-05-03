import { Routes } from '@angular/router';
import { VisualComponent} from './visual/visual.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [

    {path: 'visual', component: VisualComponent},
    {path: '', component: HomeComponent}

];
