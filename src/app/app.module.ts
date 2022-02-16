import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgBrazil } from 'ng-brazil';
import { TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);



import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { AppRoutingModule, rootRouterConfig } from './app.routes';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { EditarProdutoComponent } from './demos/arquitetura-componente/editar-produto/editar-produto.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/filmes/filmes.component';
import { FileSizePipe } from './demos/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/filmes/image.pipe';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { Provider } from '@angular/compiler/src/core';
import { HttpClientModule } from '@angular/common/http';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
    EditarProdutoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    HttpClientModule,
    CommonModule,      
    NgBrazil,
    CustomFormsModule,
    TextMask.TextMaskModule,
    //[RouterModule.forRoot(rootRouterConfig, { useHash: false})]
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'sgdfgfghhghjj'
    })
  ],
  // providers: [
  //   {provide: APP_BASE_HREF, useValue: '/'}
  // ],
  providers: [
    AuthGuard,
    CadastroGuard
    //BAR_PROVIDERS
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
