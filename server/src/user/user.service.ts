import { User } from './user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findOne({
      where: { id },
    });
  }
  async findByName(username: string): Promise<User> {
    return this.userModel.findOne({
      where: { username },
    });
  }
  async removeById(id: string): Promise<void> {
    const user = await this.findById(id);
    await user.destroy();
  }
}
