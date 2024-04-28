import { Exclude, Expose } from 'class-transformer';
import { IsMongoId, IsString } from 'class-validator';

@Exclude()
export class RetrieveBookParamsDTO {
  @Expose()
  @IsMongoId()
  @IsString()
  id: string;
}
