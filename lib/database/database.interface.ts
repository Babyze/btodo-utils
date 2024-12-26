import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from "typeorm";

export interface DatabaseInterfaceRepository<T> extends Repository<T> {
  createAndSave(data: DeepPartial<T>): Promise<T>;
  createManyAndSave(data: DeepPartial<T>[]): Promise<T[]>;
  findOneByCondition(filterCondition: FindOneOptions<T>): Promise<T>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  findWithRelations(relations: FindManyOptions<T>): Promise<T[]>;
  findOne(options: FindOneOptions<T>): Promise<T>;
}
