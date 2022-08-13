import CategoryModal from "../models/category.js";
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const secret = 'test';







export const Addcategory = async (req, res) => {
  const { categoryName } = req.body;

  try {
    const oldUser = await CategoryModal.findOne( {categoryName} );
    if (oldUser) return res.status(400).json({ message: "categoryName already exists" });

        const modelData = new CategoryModal({
        categoryName: categoryName,
    });

    const result = await modelData.save();
    console.log(result);

    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};


export const Findcategory = async (req, res) => {

  try {
    const oldUser = await CategoryModal.find();


    res.status(201).json({ oldUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

