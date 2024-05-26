import { CityDetailsDto } from 'src/dto/city/CityDetailsDto';

export interface CrimeRateDetailsDto {
  city: CityDetailsDto;
  crimeIndex: number;
  safetyIndex: number;
  concludedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}