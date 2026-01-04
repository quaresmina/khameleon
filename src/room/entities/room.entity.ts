import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RoomStatus } from '../enums/room-status.enum';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 6, name: 'hash_code' })
  hashCode: string;

  @Column()
  word: string;

  @Column({ type: 'enum', enum: RoomStatus })
  status: RoomStatus;
}
