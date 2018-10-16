import { ModuleWithProviders} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { MenuComponent } from './menu/menu.component';
import { EmpresaCadastroComponent } from './empresa/empresa.cadastro.component';

const APP_ROUTES : Routes = [
    {path: 'empresa', component : EmpresaComponent},
    {path : 'empresa/cadastro', component: EmpresaCadastroComponent},
    {path: '', component : EmpresaComponent}
]

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
