import {
  FindOneOptions,
  FindManyOptions,
  Repository,
  DeepPartial,
} from "typeorm";
import { DatabaseInterfaceRepository } from "./database.interface";

export abstract class BaseAbstractRepository<T>
  extends Repository<T>
  implements DatabaseInterfaceRepository<T>
{
  constructor(private readonly repo: Repository<T>) {
    super(repo.target, repo.manager);
  }

  createAndSave(data: DeepPartial<T>): Promise<T> {
    const object = this.repo.create(data);
    return this.repo.save(object);
  }

  createManyAndSave(data: DeepPartial<T>[]): Promise<T[]> {
    const object = this.repo.create(data);
    return this.repo.save(object);
  }

  findOneByCondition(filterCondition: FindOneOptions<T>): Promise<T> {
    return this.repo.findOne(filterCondition);
  }

  findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repo.find(options);
  }

  findWithRelations(relations: FindManyOptions<T>): Promise<T[]> {
    return this.repo.find(relations);
  }

  findOne(options: FindOneOptions<T>): Promise<T> {
    return this.repo.findOne(options);
  }
}
