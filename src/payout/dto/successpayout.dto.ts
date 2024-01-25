
import { IsString,IsNotEmpty } from 'class-validator';

export class SuccessPayout {
    @IsNotEmpty()
    @IsString()
    initialdate: string; 

    @IsNotEmpty()
    @IsString()
    finaldate: string;

}
