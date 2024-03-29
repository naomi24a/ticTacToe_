import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BoardComponent } from './modules/board/board.component';
import { ButtonComponent } from './shared/button/button.component';
import { LogicComponent } from './shared/logic/logic.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ButtonComponent,
    LogicComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterModule,
    RouterOutlet,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}