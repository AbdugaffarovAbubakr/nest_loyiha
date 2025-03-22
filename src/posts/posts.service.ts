import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  // Removed duplicate 'remove' method to resolve the error.
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  findAll() {
    return this.postsRepository.find();
  }

  findOne(id: number) {
    return this.postsRepository.findOne({ where: { id } });
  }

  create(postData: Partial<Post>) {
    const post = this.postsRepository.create(postData);
    return this.postsRepository.save(post);
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.postsRepository.update(id, updatePostDto); // ⚡ "userId" ni qo'shib yubormaslik kerak
  }
  

  async remove(id: string): Promise<void> {
    await this.postsRepository.delete(id);
  }
}