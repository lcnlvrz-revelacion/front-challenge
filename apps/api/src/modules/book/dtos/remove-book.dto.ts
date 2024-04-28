import { Exclude } from 'class-transformer';
import { RetrieveBookParamsDTO } from './retrieve-book.dto';

@Exclude()
export class RemoveBookParamsDTO extends RetrieveBookParamsDTO {}
