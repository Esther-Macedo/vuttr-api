import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tool } from 'src/entity/tools.entity';
import { Toolinterface } from 'src/interfaces/tool.interface';
import { Like, Repository } from 'typeorm';

@Injectable()
export class AppService {
  @InjectRepository(Tool) private toolrepo: Repository<Tool>;

  async getTools() {
    const toolslist = await this.toolrepo.find();
    return toolslist;
  }

  async addTools({
    title,
    link,
    description,
    tags,
  }: Toolinterface): Promise<Tool> {
    const newtool = this.toolrepo.create({ title, link, description, tags });
    await this.toolrepo.save(newtool);
    return newtool;
  }

  async deleteTools(id: number) {
    try {
      const todelete = await this.toolrepo.findOneOrFail(id);
      const deleted = this.toolrepo.remove(todelete);
      return deleted;
    } catch (e) {
      return null;
    }
  }

  async filterTools(tag: string): Promise<Tool[]> {
    const toolsList = await this.toolrepo.find({
      where: { tags: Like(`%${tag}%`) },
    });

    return toolsList;
  }
}
