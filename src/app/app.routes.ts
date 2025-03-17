import { Routes } from '@angular/router';
import { PatternsComponent } from './patterns/patterns/patterns.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { StrategyComponent } from './strategy/strategy/strategy.component';
import { FactoryComponent } from './factory/factory/factory.component';

export const routes: Routes = [
    {path: '',component: HomePageComponent},
    {path:'home',component:HomePageComponent},
    {path:'patterns',component:PatternsComponent},
    {path:'patterns/strategy',component:StrategyComponent},
    {path: 'patterns/factory',component:FactoryComponent}
];
