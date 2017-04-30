import * as mongoose from 'mongoose';

export interface Pirate extends mongoose.Document {
  name: string;
  bounty: number;
  isEsper: boolean;
}

const pirateSchema = new mongoose.Schema({
  name:     {type: String, required: true},
  bounty:   {type: Number, required: true},
  isEsper:  {type: Boolean, required: true}
})
export const PirateModel = mongoose.model<Pirate>('Pirate', pirateSchema);
