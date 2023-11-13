import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaInput } from './dto/create-categoria.input';
import { UpdateCategoriaInput } from './dto/update-categoria.input';
import { Body, Param } from '@nestjs/common';

@Resolver('Categoria')
export class CategoriasResolver {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Mutation('createCategoria')
  create(
    @Body('createCategoriaInput') createCategoriaInput: CreateCategoriaInput,
  ) {
    return this.categoriasService.create(createCategoriaInput);
  }

  @Query('categorias')
  findAll() {
    return this.categoriasService.findAll();
  }

  @Query('categoria')
  findOne(@Param('id') id: number) {
    return this.categoriasService.findOne(id);
  }

  @Mutation('updateCategoria')
  update(
    @Param('id') id: number,
    @Args('updateCategoriaInput') updateCategoriaInput: UpdateCategoriaInput,
  ) {
    return this.categoriasService.update(+id, updateCategoriaInput);
  }

  @Mutation('removeCategoria')
  remove(@Param('id') id: number) {
    return this.categoriasService.remove(id);
  }
}
