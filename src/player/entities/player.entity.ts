import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ name: 'is_chameleon' })
  isChameleon: boolean;

  @Column({ name: 'is_host' })
  isHost: boolean;
}
