import { GameComponent } from './game/game.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyquizappComponent } from './myquizapp/myquizapp.component';
//import { GameComponent } from './myquizapp/game/game.component';
import { RouterModule } from '@angular/router';
import { ExtraforcheckingComponent } from './extraforchecking/extraforchecking.component';
import { EndpageComponent } from './endpage/endpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MyquizappComponent,
    GameComponent,
    ExtraforcheckingComponent,
    EndpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:MyquizappComponent},
      {path:'game', component:GameComponent},
      {path:'endpage', component:EndpageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
