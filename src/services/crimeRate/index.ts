import axios from 'axios';
import { CrimeSaveDto } from "src/dto/crimeRate/CrimeSaveDto";
import { CrimeRate, ICity } from "src/model/crimeRate";
import log4js from 'log4js';

const getCity = async (cityId: string): Promise<ICity> => {
  try {
    const response = await axios.get<ICity>('http://localhost:8080/api/city/' + cityId);
    log4js.getLogger().info(response);
    return response.data;
  } catch (error) {
    console.error(`Error fetching city with ID ${cityId}:`, error);
    throw error;
  }
};

export const saveCrimeRate = async ({
  cityId,
  crimeIndex,
  safetyIndex,
  concludedAt,
}: CrimeSaveDto): Promise<string> => {
  try {
    if (cityId !== undefined) {
      const cityIdStr = cityId.toString();
      const city = await getCity(cityIdStr);
      const crimeRate = new CrimeRate({
        city: city._id,
        crimeIndex,
        safetyIndex,
        concludedAt,
      });
      await crimeRate.save();
      return crimeRate._id.toString();
    } else {
      throw new Error("cityId is required");
    }
  } catch (error) {
    console.error('Error saving crime rate:', error);
    throw error;
  }
};