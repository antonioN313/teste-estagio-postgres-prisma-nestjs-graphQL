import { Field, ObjectType } from '@nestjs/graphql';
import { CreateCategoriaInput } from './create-categoria.input';
import { PartialType } from '@nestjs/mapped-types';
@ObjectType()
export class UpdateCategoriaInput extends PartialType(CreateCategoriaInput) {
  @Field()
  nome?: string;
}
