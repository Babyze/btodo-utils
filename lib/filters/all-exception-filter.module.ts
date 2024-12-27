import { Module } from "@nestjs/common";
import { Logger, LoggerModule } from "nestjs-pino";
import { AllExceptionFilter } from "./rpc-to-http-exception.filter";

@Module({
  imports: [LoggerModule],
  providers: [AllExceptionFilter, Logger],
  exports: [AllExceptionFilter],
})
export class AllExceptionFilterModule {}
