import { Injectable } from '@nestjs/common';
import { PrismaService } from '../databases/prisma.service';
import { CreateProdutoInput } from './dto/create-produto.input';
import { UpdateProdutoInput } from './dto/update-produto.input';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  async findAll(search?: string) {
    const where = search ? { nome: { contains: search } } : {};
    return this.prisma.produto.findMany({ where });
  }

  async findOne(id: number) {
    return this.prisma.produto.findUnique({ where: { id } });
  }

  async create(createProdutoInput: CreateProdutoInput) {
    return this.prisma.produto.create({ data: createProdutoInput });
  }

  async update(id: number, updadeProdutoInput: UpdateProdutoInput) {
    return this.prisma.produto.update({
      where: { id },
      data: updadeProdutoInput,
    });
  }

  async remove(id: number) {
    return this.prisma.produto.delete({ where: { id } });
  }
}
