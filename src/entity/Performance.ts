import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('performance')
export class Performance extends BaseEntity {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column({
    nullable: true,
  })
  date: number;

  @Column({
    nullable: true,
  })
  comission: number;

  @Column({
    nullable: true,
  })
  sales: number;

  @Column({
    nullable: true,
  })
  leads: number;

  @Column({
    nullable: true,
  })
  clicks: number;

  @Column({
    nullable: true,
  })
  epc: number;

  @Column({
    nullable: true,
  })
  impressions: number;

  @Column({
    nullable: true,
  })
  cr: number;

}
