import { CreateCategoriaInput } from './create-categoria.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCategoriaInput extends PartialType(CreateCategoriaInput) {
  id: number;
}
