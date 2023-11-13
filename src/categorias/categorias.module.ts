import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasResolver } from './categorias.resolver';

@Module({
  providers: [CategoriasResolver, CategoriasService],
})
export class CategoriasModule {}
