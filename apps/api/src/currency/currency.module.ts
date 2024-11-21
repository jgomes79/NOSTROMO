import { Module } from "@nestjs/common";

import { currencyProviders } from "@/currency/currency.providers";
import { DatabaseModule } from "@/database/database.module";

import { CurrencyController } from "./currency.controller";
import { CurrencyService } from "./currency.service";

/**
 * Module that provides currency-related services and controllers.
 */
@Module({
  imports: [DatabaseModule],
  controllers: [CurrencyController],
  providers: [CurrencyService, ...currencyProviders],
})
export class CurrencyModule {}
