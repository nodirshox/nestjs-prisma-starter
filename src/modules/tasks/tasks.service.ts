import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services';
import { CreateTaskDto } from '@/modules/tasks/dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  createTask(body: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });
  }
}
