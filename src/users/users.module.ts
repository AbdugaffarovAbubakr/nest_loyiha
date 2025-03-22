import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Bu muhim!
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Agar UsersService boshqa modullarga kerak bo'lsa
})
export class UsersModule {}
