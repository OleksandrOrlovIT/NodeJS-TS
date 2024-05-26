export class CrimeSaveDto {
  cityId?: number;
  crimeIndex?: number;
  safetyIndex?: number;
  concludedAt?: Date;

  constructor(data: Partial<CrimeSaveDto>) {
    this.cityId = data.cityId;
    this.crimeIndex = data.crimeIndex;
    this.safetyIndex = data.safetyIndex;
    this.concludedAt = data.concludedAt;
  }
}