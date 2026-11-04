import { newUserModel } from "../../src/database/model/newUserModel.js";

export const createNewUser = async (data) => {
  let { branch, name, id, yearOfBirth, fatherPhone, motherPhone } = data;

  let addNewUser = await newUserModel.create({
    branch,
    name,
    id,
    yearOfBirth,
    fatherPhone,
    motherPhone,
  });

  if (addNewUser) {
    return { message: "New User added", newUser: addNewUser };
  } else {
    return { message: "New User not added" };
  }
};

export const getAllUsers = async () => {
  let addNewUser = await newUserModel.find();
  if (addNewUser.length > 0) {
    return addNewUser;
  } else {
    return { message: "no Users" };
  }
};
