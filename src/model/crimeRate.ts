import mongoose, { Document, Schema, Types } from 'mongoose';

interface ICity extends Document {
  cityName: string;
  countryId: number;
  cityPopulation: number;
  cityArea: number;
  foundedAt: Date;
  languages: string[];
}

interface ICrimeRate extends Document {
  city: ICity;
  crimeIndex: number;
  safetyIndex: number;
  concludedAt: Date;
}

const citySchema = new Schema<ICity>({
  cityName: { type: String, required: true },
  countryId: { type: Number, required: true },
  cityPopulation: { type: Number, required: true },
  cityArea: { type: Number, required: true },
  foundedAt: { type: Date, required: true },
  languages: [{ type: String, required: true }],
});

const crimeRateSchema = new Schema<ICrimeRate>({
  city: { type: Types.ObjectId, ref: 'City', required: true },
  crimeIndex: { type: Number, required: true },
  safetyIndex: { type: Number, required: true },
  concludedAt: { type: Date, required: true },
});

const City = mongoose.model<ICity>('City', citySchema);
const CrimeRate = mongoose.model<ICrimeRate>('CrimeRate', crimeRateSchema);

export { City, ICity, CrimeRate, ICrimeRate };