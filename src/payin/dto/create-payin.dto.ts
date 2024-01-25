import { IsNotEmpty, IsString } from "class-validator";

export class CreatePayinDto {
    @IsNotEmpty()
    @IsString()
    initialdate: string; 

    @IsNotEmpty()
    @IsString()
    finaldate: string;

    


}
