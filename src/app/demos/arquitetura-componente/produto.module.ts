import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; 


import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.router";
import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./componentes/produto-count.component";
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoService } from "./services/produto.service";
import { ProdutosResolve } from "./services/produto.resolve";

@NgModule({
    declarations:[
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent
    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule
    ],
    providers:[
        ProdutoService,
        ProdutosResolve
    ],
    exports: []

})

export class ProdutoModule{}