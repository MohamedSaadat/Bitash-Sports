import mongoose, { Schema } from "mongoose";

const sportSchema = new Schema({
  sportName: String,
  amountPaid: Number,
  fee: Number,
  forMonth: Number,
  paymentMethodType: String,
});

const paymentMethodSchema = new Schema({
  serialNumber: Number,
  date: {
    type: Date,
    default: Date.now,
  },
  branch: String,
  name: String,
  userId: Number,
  notes: String,
  sports: [sportSchema],
});
export const receiptModel = mongoose.model("receipt", paymentMethodSchema);

