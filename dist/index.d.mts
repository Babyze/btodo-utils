import * as _nestjs_common from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { Repository, DeepPartial, FindOneOptions, FindManyOptions } from 'typeorm';
import { Observable } from 'rxjs';

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

declare const grpcCatchErrorOrDone: <T>(func: Observable<T>) => Promise<T>;

declare const httpCatchErrorOrDone: (func: any) => any;

declare const GrpcStatusToHttpCode: Record<number, number>;

export { BaseAbstractRepository, DatabaseModule, GrpcStatusToHttpCode, Timestamp, Timestamp2, grpcCatchErrorOrDone, httpCatchErrorOrDone };
