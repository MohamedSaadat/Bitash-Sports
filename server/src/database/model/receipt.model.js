import mongoose, { Schema } from "mongoose";

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  yearOfBirth: {
    type: Number,
    required: true,
  },
});

const sports = new Schema({
  swimming: {
    amountPaid: {
      type: Number,
      default: 0,
    },
    additional: {
      type: Number,
      default: 0,
    },
    firstStar: {
      type: Number,
      default: 0,
    },
    secondStar: {
      type: Number,
      default: 0,
    },
    thirdStar: {
      type: Number,
      default: 0,
    },
    fourthStar: {
      type: Number,
      default: 0,
    },
    championship: {
      type: Number,
      default: 0,
    },
    federation: {
      type: Number,
      default: 0,
    },
    fitness: {
      type: Number,
      default: 0,
    },
  },
  gymnastics: {
    amountPaid: {
      type: Number,
      default: 0,
    },
    championship: {
      type: Number,
      default: 0,
    },
    federation: {
      type: Number,
      default: 0,
    },
    fitness: {
      type: Number,
      default: 0,
    },
  },
  karate: {
    amountPaid: {
      type: Number,
      default: 0,
    },
    championship: {
      type: Number,
      default: 0,
    },
    federation: {
      type: Number,
      default: 0,
    },
    belt: {
      type: Number,
      default: 0,
    },
  },
  kungFu: {
    amountPaid: {
      type: Number,
      default: 0,
    },
    championship: {
      type: Number,
      default: 0,
    },
    federation: {
      type: Number,
      default: 0,
    },
    belt: {
      type: Number,
      default: 0,
    },
  },
  taekwondo: {
    amountPaid: {
      type: Number,
      default: 0,
    },
    championship: {
      type: Number,
      default: 0,
    },
    federation: {
      type: Number,
      default: 0,
    },
    belt: {
      type: Number,
      default: 0,
    },
  },
  kickboxing: {
    amountPaid: {
      type: Number,
      default: 0,
    },
    championship: {
      type: Number,
      default: 0,
    },
    federation: {
      type: Number,
      default: 0,
    },
    belt: {
      type: Number,
      default: 0,
    },
  },
  football: {
    amountPaid: {
      type: Number,
      default: 0,
    },
    championship: {
      type: Number,
      default: 0,
    },
    federation: {
      type: Number,
      default: 0,
    },
  },
  medical: {
    amountPaid: {
      type: Number,
      default: 0,
    },
  },
  administrative: {
    amountPaid: {
      type: Number,
      default: 0,
    },
  },
});

const paymentMethodSchema = new Schema({
  serialNumber: Number,
  date: {
    type: Date,
    default: Date.now,
  },
  branch: {
    type: String,
    required: true,
  },
  user: user,
  notes: {
    type: String,
    default: "",
  },
  sports: sports,
  forMonth: Number,
  paymentMethodType: {
    type: String,
    default: "Cash",
  },
});
export const receiptModel = mongoose.model("receipt", paymentMethodSchema);
