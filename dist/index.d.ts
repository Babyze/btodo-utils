import * as _nestjs_common from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { Repository, DeepPartial, FindOneOptions, FindManyOptions } from 'typeorm';
import { Observable } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

interface ITimestamp {
    second: number;
}
declare class Timestamp implements ITimestamp {
    second: number;
    constructor(date: number | Date);
    getSecond(): number;
    toDate(): Date;
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

declare const httpCatchErrorOrDone: <T>(func: Observable<T>) => Promise<T>;

declare const GrpcStatusToHttpCode: Record<number, number>;

declare const Hash: {
    generateSalt: (round?: number) => any;
    generateHash: (data: string | Buffer, salt: string) => any;
    compare: (data: string | Buffer, encrypted: string) => any;
    getRounds: (encrypted: string) => any;
};

declare const PasswordUtils: {
    encrypedPassword: (password: string, round?: number) => any;
    isValidPassword(password: string, passwordEncryped: string): boolean;
};

declare const transformDataTogRPCData: (value: any) => any;

declare const transformgRPCToData: (value: any) => any;

declare abstract class Error extends RpcException {
    constructor(code: number, message?: string);
}
declare class NotFoundError extends Error {
    constructor(message?: string);
}
declare class InvalidAgrumentError extends Error {
    constructor(message?: string);
}
declare class UnknownError extends Error {
    constructor(message?: string);
}
declare class AlreadyExistError extends Error {
    constructor(message?: string);
}

export { AlreadyExistError, BaseAbstractRepository, DatabaseModule, GrpcStatusToHttpCode, Hash, InvalidAgrumentError, NotFoundError, PasswordUtils, Timestamp, UnknownError, grpcCatchErrorOrDone, httpCatchErrorOrDone, transformDataTogRPCData, transformgRPCToData };
