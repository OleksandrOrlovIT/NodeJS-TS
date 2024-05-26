import mongoose, { Document, Schema, Types } from 'mongoose';

interface ICity extends Document {
  cityName: string;
  country: Types.ObjectId | ICountry;
  cityPopulation: number;
  cityArea: number;
  foundedAt: Date;
  languages: string[];
}

interface ICountry extends Document {
  countryName: string;
  countryArea: number;
  currency: string;
}

interface ICrimeRate extends Document {
  city: Types.ObjectId | ICity;
  crimeRate: number;
  concludedAt: Date;
}

const citySchema = new Schema<ICity>({
  cityName: { type: String, required: true },
  country: { type: Types.ObjectId, ref: 'Country', required: true },
  cityPopulation: { type: Number, required: true },
  cityArea: { type: Number, required: true },
  foundedAt: { type: Date, required: true },
  languages: [{ type: String, required: true }],
});

const countrySchema = new Schema<ICountry>({
  countryName: { type: String, required: true, unique: true },
  countryArea: { type: Number, required: true },
  currency: { type: String, required: true },
});

const crimeRateSchema = new Schema<ICrimeRate>({
  city: { type: Types.ObjectId, ref: 'City', required: true },
  crimeRate: { type: Number, required: true },
  concludedAt: { type: Date, required: true },
});

const City = mongoose.model<ICity>('City', citySchema);
const Country = mongoose.model<ICountry>('Country', countrySchema);
const CrimeRate = mongoose.model<ICrimeRate>('CrimeRate', crimeRateSchema);

export { City, ICity, Country, ICountry, CrimeRate, ICrimeRate };