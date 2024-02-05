/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor (private prisma: PrismaService){}
  createBlog(createBlogDto: CreateBlogDto) {
    return 'This action adds a new blog';
  }

  findAll() {
    return this.prisma.blogf.findMany();
  }

  findOne(id: number) {
    return this.prisma.blogf.findUnique({where:{id}});
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.prisma.blogf.update({
      where: {id},
      data: updateBlogDto,
    });
  }

  remove(id: number) {
    return this.prisma.blogf.delete({where: {id}});
  }

  
}
