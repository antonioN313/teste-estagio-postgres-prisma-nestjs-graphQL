import { Injectable } from '@nestjs/common';
import { CreateCategoriaInput } from './dto/create-categoria.input';
import { UpdateCategoriaInput } from './dto/update-categoria.input';

@Injectable()
export class CategoriasService {
  create(createCategoriaInput: CreateCategoriaInput) {
    return 'This action adds a new categoria';
  }

  findAll() {
    return `This action returns all categorias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaInput: UpdateCategoriaInput) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
