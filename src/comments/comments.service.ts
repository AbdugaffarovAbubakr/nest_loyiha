import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  remove(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>,
  ) { }

  findAll() {
    return this.commentsRepository.find({ relations: ['post'] });
  }

  findOne(id: number) {
    return this.commentsRepository.findOne({ where: { id }, relations: ['post'] });
  }

  create(commentData: Partial<Comment>) {
    const comment = this.commentsRepository.create(commentData);
    return this.commentsRepository.save(comment);
  }

  update(id: number, commentData: Partial<Comment>) {
    return this.commentsRepository.update(id, commentData);
  }

  delete(id: number) {
    return this.commentsRepository.delete(id);
  }
}