import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Post, (post) => post.id, { onDelete: 'CASCADE' })
  post: Post;
}
