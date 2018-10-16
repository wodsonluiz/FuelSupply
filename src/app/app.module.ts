import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MenuComponent } from './menu/menu.component';
import { EmpresaCadastroComponent } from './empresa/empresa.cadastro.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    MenuComponent,
    EmpresaCadastroComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
