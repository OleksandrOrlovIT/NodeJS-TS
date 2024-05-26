import log4js from 'log4js';
import httpStatus from 'http-status';
import { Request, Response } from 'express';
import {
  saveCrimeRate as saveCrimeRateApi,
} from 'src/services/crimeRate';
import { InternalError } from 'src/system/internalError';
import {CrimeSaveDto} from "src/dto/crimeRate/CrimeSaveDto";

export const saveCrimeRate = async (req: Request, res: Response) => {
  try {
    console.log("Inside saveCrimeRate");
    const {
      cityId,
      crimeIndex,
      safetyIndex,
      concludedAt,
    } = new CrimeSaveDto(req.body);
    const id = await saveCrimeRateApi({
      cityId,
      crimeIndex,
      safetyIndex,
      concludedAt,
    });
    res.status(httpStatus.CREATED).send({
      id,
    });
  } catch (err) {
    const { message, status } = new InternalError(err);
    log4js.getLogger().error('Error in creating crimeRate.', err);
    res.status(status).send({ message });
  }
};