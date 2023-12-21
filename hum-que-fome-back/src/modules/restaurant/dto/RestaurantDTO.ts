import { IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { AddressRestaurantDTO } from './AddressRestaurantDTO';

export class RestaurantDTO {
  @IsNotEmpty({ message: 'O campo nome é obrigatório!' })
  name: string;

  @IsNotEmpty({ message: 'O campo descrição é obrigatório!' })
  description: string;

  @IsNotEmpty({ message: 'O campo telefone é obrigatório!' })
  phoneNumber: string;

  @IsNotEmpty({ message: 'O campo URL do banner é obrigatório!' })
  bannerUrl: string;

  @IsObject()
  @ValidateNested()
  @Type(() => AddressRestaurantDTO)
  address: AddressRestaurantDTO;
}
