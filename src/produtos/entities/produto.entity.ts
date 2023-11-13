import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ProdutoEntity {
  @Field()
  id: number;

  @Field()
  nome: string;

  @Field()
  categoriaId: number;
}
