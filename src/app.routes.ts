import { Routes } from "@angular/router";
import { MainComponent } from "./app/main/main.component";
import { SobreComponent } from "./app/sobre/sobre.component";
import { AcaoComponent } from "./app/acao/acao.component";
import { RomanceComponent } from "./app/romance/romance.component";
import { TerrorComponent } from "./app/terror/terror.component";
import { EntidadeComponent } from "./app/entidade/entidade.component";


export const ROUTE: Routes = [
    {path: '', component: MainComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'acao', component: AcaoComponent},
    {path: 'terror', component: TerrorComponent},
    {path: 'romance', component: RomanceComponent},
    {path: 'entidade', component: EntidadeComponent}
]