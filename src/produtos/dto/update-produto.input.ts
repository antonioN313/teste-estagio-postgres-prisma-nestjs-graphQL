import { CreateProdutoInput } from './create-produto.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProdutoInput extends PartialType(CreateProdutoInput) {
  id: number;
}
