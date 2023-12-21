import { IsNotEmpty } from 'class-validator';

export class AddressRestaurantDTO {
  @IsNotEmpty({ message: 'O campo rua é obrigatório!' })
  street: string;

  @IsNotEmpty({ message: 'O campo cidade é obrigatório!' })
  city: string;

  @IsNotEmpty({ message: 'O campo estado é obrigatório!' })
  state: string;

  @IsNotEmpty({ message: 'O campo CEP é obrigatório!' })
  zip: string;

  @IsNotEmpty({ message: 'O campo número é obrigatório!' })
  number: string;
}
