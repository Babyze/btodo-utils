import * as _nestjs_common from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { Repository, DeepPartial, FindOneOptions, FindManyOptions } from 'typeorm';

interface ITimestamp {
    second: number;
}
declare class Timestamp implements ITimestamp {
    second: number;
    constructor(date: number | Date);
    getSecond(): number;
    toDate(): Date;
}
declare class Timestamp2 {
}

declare class DatabaseModule {
    static forFeature(models: EntityClassOrSchema[]): _nestjs_common.DynamicModule;
}

interface DatabaseInterfaceRepository<T> extends Repository<T> {
    createAndSave(data: DeepPartial<T>): Promise<T>;
    createManyAndSave(data: DeepPartial<T>[]): Promise<T[]>;
    findOneByCondition(filterCondition: FindOneOptions<T>): Promise<T>;
    findAll(options?: FindManyOptions<T>): Promise<T[]>;
    findWithRelations(relations: FindManyOptions<T>): Promise<T[]>;
    findOne(options: FindOneOptions<T>): Promise<T>;
}

declare abstract class BaseAbstractRepository<T> extends Repository<T> implements DatabaseInterfaceRepository<T> {
    private readonly repo;
    constructor(repo: Repository<T>);
    createAndSave(data: DeepPartial<T>): Promise<T>;
    createManyAndSave(data: DeepPartial<T>[]): Promise<T[]>;
    findOneByCondition(filterCondition: FindOneOptions<T>): Promise<T>;
    findAll(options?: FindManyOptions<T>): Promise<T[]>;
    findWithRelations(relations: FindManyOptions<T>): Promise<T[]>;
    findOne(options: FindOneOptions<T>): Promise<T>;
}

export { BaseAbstractRepository, DatabaseModule, Timestamp, Timestamp2 };
