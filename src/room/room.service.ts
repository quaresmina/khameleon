import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomService {
  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }
}
