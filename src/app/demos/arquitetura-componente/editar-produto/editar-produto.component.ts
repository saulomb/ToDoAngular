import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styles: []
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;

  constructor(
    private route:ActivatedRoute, 
    private produtoService: ProdutoService,
    private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params=> {
        console.log(params['id']);
        this.produto = this.produtoService.obterPorId(params['id']);
        console.log(this.produto);
      });

  }
  salvar(){
    this.router.navigate(['/produtos']);
    //recarrega como se setador a url do navegador
    //this.router.navigateByUrl('/produtos');
  }

}
