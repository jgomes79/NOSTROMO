import { Currency } from '@/currency/currency.entity';

/**
 * Provides CurrencyRepository with Currency model.
 */
export const currencyProviders = [
  {
    provide: 'CurrencyRepository',
    useValue: Currency,
  },
];
