import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaInput } from './dto/create-categoria.input';
import { UpdateCategoriaInput } from './dto/update-categoria.input';

@Resolver('Categoria')
export class CategoriasResolver {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Mutation('createCategoria')
  create(@Args('createCategoriaInput') createCategoriaInput: CreateCategoriaInput) {
    return this.categoriasService.create(createCategoriaInput);
  }

  @Query('categorias')
  findAll() {
    return this.categoriasService.findAll();
  }

  @Query('categoria')
  findOne(@Args('id') id: number) {
    return this.categoriasService.findOne(id);
  }

  @Mutation('updateCategoria')
  update(@Args('updateCategoriaInput') updateCategoriaInput: UpdateCategoriaInput) {
    return this.categoriasService.update(updateCategoriaInput.id, updateCategoriaInput);
  }

  @Mutation('removeCategoria')
  remove(@Args('id') id: number) {
    return this.categoriasService.remove(id);
  }
}
