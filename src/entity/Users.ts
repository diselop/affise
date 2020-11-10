import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  email: string;

  @Column({
    length: 255,
  })
  first_name: string;

  @Column({
    length: 255,
  })
  last_name: string;

  @Column({
    length: 255,
  })
  avatar: string;
}
