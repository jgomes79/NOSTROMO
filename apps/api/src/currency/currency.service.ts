import { Inject, Injectable } from "@nestjs/common";

import { Currency } from "@/currency/currency.entity";

@Injectable()
export class CurrencyService {
  constructor(
    @Inject("CurrencyRepository")
    private currencyRepository: typeof Currency,
  ) {}

  /**
   * Retrieves a Currency by its ID.
   *
   * @param {string} id - The ID of the project to retrieve.
   * @returns {Promise<Currency>} A promise that resolves to the currency with the specified ID.
   */
  async getById(id: string): Promise<Currency> {
    return this.currencyRepository.findOne({
      where: {
        id,
      },
    });
  }
}
