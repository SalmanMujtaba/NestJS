import { Coffee } from 'src/coffee/entities/coffee.entity';
/* Flavor Entity - FINAL CODE */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => Coffee,
    coffee => coffee.flavors, // what is "flavor" within the Coffee Entity
  ) // 👈
  coffees: Coffee[];
}