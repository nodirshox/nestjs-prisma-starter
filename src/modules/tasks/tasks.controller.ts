import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDto } from '@/modules/tasks/dto/create-task.dto';
import { TasksService } from '@/modules/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post()
  createTask(@Body() taskDetails: CreateTaskDto) {
    return this.taskService.createTask(taskDetails);
  }
}
