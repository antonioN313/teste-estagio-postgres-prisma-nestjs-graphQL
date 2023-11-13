import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProdutosService } from './produtos.service';
import { CreateProdutoInput } from './dto/create-produto.input';
import { UpdateProdutoInput } from './dto/update-produto.input';
import { Body, Param } from '@nestjs/common';

@Resolver('Produto')
export class ProdutosResolver {
  constructor(private readonly produtosService: ProdutosService) {}

  @Mutation('createProduto')
  create(@Args('createProdutoInput') createProdutoInput: CreateProdutoInput) {
    return this.produtosService.create(createProdutoInput);
  }

  @Query('produtos')
  findAll() {
    return this.produtosService.findAll();
  }

  @Query('produto')
  findOne(@Args('id') id: number) {
    return this.produtosService.findOne(id);
  }

  @Mutation('updateProduto')
  update(
    @Param('id') id: number,
    @Body() updateProdutoInput: UpdateProdutoInput,
  ) {
    return this.produtosService.update(+id, updateProdutoInput);
  }

  @Mutation('removeProduto')
  remove(@Args('id') id: number) {
    return this.produtosService.remove(id);
  }
}
