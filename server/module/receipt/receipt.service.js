import { receiptModel } from "../../src/database/model/receipt.model.js";
import { counterModel } from "./counterModel.js";

export const createReceipt = async (data) => {
  let { date, branch, user, notes, sports, paymentMethodType, forMonth } = data;

  const counter = await counterModel.findOneAndUpdate(
    { _id: "receipt" },
    { $inc: { seq: 1 } },
    {
      returnDocument: "after",
      upsert: true,
    },
  );

  const serialNumber = counter.seq;

  let addReceipt = await receiptModel.create({
    serialNumber,
    date,
    branch,
    user,
    notes,
    sports,
    paymentMethodType,
    forMonth,
  });

  if (addReceipt) {
    return { message: "receipt added", receipt: addReceipt };
  } else {
    return { message: "receipt not added" };
  }
};

export const getAllReceipts = async () => {
  let allReceipts = await receiptModel.find();
  if (allReceipts.length > 0) {
    return allReceipts;
  } else {
    return { message: "no Receipts" };
  }
};

// export const getReceiptById = async (userId) => {
//   let receipt = await receiptModel.find({ userId });
//   if (receipt.length > 0) {
//     return { message: "done", receipt };
//   } else {
//     return { message: "receipt not found" };
//   }
// };

// export const updateUser = async (body, query) => {
//   let { name, userId, yearOfBirth, phone, notes, sports } = body;
//   let { id } = query;

//   let userData = await receiptModel.findById(id);
//   if (userData) {
//     let updatedUser = await receiptModel.findByIdAndUpdate(id, {
//       name,
//       userId,
//       yearOfBirth,
//       phone,
//       notes,
//       sports,
//     });
//     if (updatedUser) {
//       return { message: "user updated" };
//     } else {
//       return { message: "user not updated" };
//     }
//   } else {
//     return { message: "user not found" };
//   }
// };

// export const deleteUser = async (id) => {
//   let userData = await receiptModel.findById(id);
//   if (userData) {
//     let deleteUser = await receiptModel.findByIdAndDelete(id);
//     return { message: "user is deleted" };
//   } else {
//     return { message: "user not found" };
//   }
// };
