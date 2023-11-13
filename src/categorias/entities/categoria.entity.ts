import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CategoriaEntity {
  @Field()
  id: number;

  @Field()
  nome: string;
}
