import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProdutoInput {
  @Field()
  nome: string;
  @Field()
  categoriaId: number;
}
