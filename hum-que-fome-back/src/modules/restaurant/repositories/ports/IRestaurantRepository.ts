import { Restaurant } from '@prisma/client';

import { RestaurantDTO } from '../../dto/RestaurantDTO';

export interface IRestaurantRepository {
  create: (data: RestaurantDTO) => Promise<void>;
  update: (id: string, data: RestaurantDTO) => Promise<void>;
  delete: (id: string) => Promise<void>;
  findById: (id: string) => Promise<Restaurant>;
}
