import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

/* PaginationQueryDto */
// Implicit type conversion happens cause of the flag in main.ts
export class PaginationDto {
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  limit: number;

  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  offset: number;
}