import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateCategoriaInput {
  @Field()
  nome: string;
}
