import { Field, InputType } from '@nestjs/graphql';
import { CreateProdutoInput } from './create-produto.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateProdutoInput extends PartialType(CreateProdutoInput) {
  @Field()
  nome?: string;
  @Field()
  categoriaId?: number;
}
