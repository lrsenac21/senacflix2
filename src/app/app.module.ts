import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AcaoComponent } from './acao/acao.component';
import { SobreComponent } from './sobre/sobre.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ROUTE } from 'src/app.routes';
import { RomanceComponent } from './romance/romance.component';
import { TerrorComponent } from './terror/terror.component';
import { FooterComponent } from './footer/footer.component';
import { EntidadeComponent } from './entidade/entidade.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AcaoComponent,
    SobreComponent,
    RomanceComponent,
    TerrorComponent,
    FooterComponent,
    EntidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTE)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
