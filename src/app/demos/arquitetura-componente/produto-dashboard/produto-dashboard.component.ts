import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[]

  @ViewChild(ProdutoCountComponent,{static: false}) contator: ProdutoCountComponent;
   @ViewChild('teste', {static: false}) mesagemTela: ElementRef;

  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService ) { }


  ngOnInit() {
    //this.produtos = this.produtoService.obterTodos('todos');
    //console.log(this.route.snapshot.data['produtos']);
    //console.log(this.route.snapshot.data['teste']);
    this.produtos = this.route.snapshot.data['produtos'];
    //console.log(this.produtos);
    // this.produtos = [{
    //   id: 1,
    //   nome: 'Teste',
    //   ativo: true,
    //   valor: 100,
    //   imagem: 'celular.jpg'
    // },
    // {
    //   id: 2,
    //   nome: 'Teste 2',
    //   ativo: true,
    //   valor: 200,
    //   imagem: 'gopro.jpg'
    // },
    // {
    //   id: 3,
    //   nome: 'Teste 3',
    //   ativo: true,
    //   valor: 300,
    //   imagem: 'laptop.jpg'
    // },
    // {
    //   id: 4,
    //   nome: 'Teste 4',
    //   ativo: true,
    //   valor: 400,
    //   imagem: 'mouse.jpg'
    // },
    // {
    //   id: 5,
    //   nome: 'Teste 5',
    //   ativo: true,
    //   valor: 500,
    //   imagem: 'teclado.jpg'
    // },
    // {
    //   id: 6,
    //   nome: 'Teste 6',
    //   ativo: false,
    //   valor: 600,
    //   imagem: 'headset.jpg'
    // }];
  }

  ngAfterViewInit(): void {
   // console.log('Objeto do contador: ', this.contator.produtos); 
    
    let clickTexto: Observable<any> = fromEvent(this.mesagemTela.nativeElement, 'click');
     clickTexto.subscribe((()=> {
       alert('clicou no texto');
       return;
     }));

     //console.log(this.botoes);
     this.botoes.forEach(p=> {
       //console.log(p.produto);
     })
  }

  mudarStatus(event: Produto){
    event.ativo = !event.ativo;
  }

}
