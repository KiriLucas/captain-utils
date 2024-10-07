import { OrderDirection } from '../enums/order-directions.enum';

export class OrderingOptions {
  /**
   * Ordering direction (ascending or descending)
   */
  direction: OrderDirection = OrderDirection.DESC;

  /**
   * If true, won't throw an exception when an invalid input type is used.
   * This may lead to unexpected behaviours.
   */
  ignoreTypeValidation: boolean = false;
}
