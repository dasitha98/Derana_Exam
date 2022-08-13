import UserModal from "../models/user.js";
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    if(password != oldUser.password){
      res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email: oldUser.email, password: oldUser.password, role: oldUser.role }, secret, { expiresIn: "6h" });
    res.status(200).json({ "result": oldUser, "token": token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};



export const TokenLink = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    if(password != oldUser.password){
      res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email: oldUser.email, password: oldUser.password, role: oldUser.role }, secret, { expiresIn: "6h" });
    
    const tokenstring = `{"result":`+`{`+`"role":`+`"`+oldUser.role+`"`+`}`+`,"token":`+`"`+token+`"}`;

    res.status(200).json({ tokenstring });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const Allusers = async (req, res) => {

  try {
    const oldUser = await UserModal.find();


    res.status(201).json({ oldUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};



export const signup = async (req, res) => {
  const { email, password, role } = req.body;
  console.log(req.body);

  try {
    const oldUser = await UserModal.findOne( {email} );
    if (oldUser) return res.status(400).json({ message: "user already exists" });


      const modelData = new UserModal({
        email: email,
        password: password,
        role: role
    });

    const result = await modelData.save();
    console.log(result);

    // const token = jwt.sign( { email: result.email, id: result._id, role: result.role }, secret, { expiresIn: "6h" } );
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};







export const updateUser = async (req, res) => {
  const id = req.params.id;
  const user = await UserModal.findById(id);

  if (user){
    const { firstName, lastName, email, phone,city} = req.body;
    // const profileImage = req.files;
    // console.log(req.body);
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phone);
    console.log(city);


    // const hashedPassword = encrypt(password);

      user.firstName= firstName || user.firstName;
      user.lastName= lastName || user.lastName;
      user.email= email || user.email;
      user.phone= phone || user.phone;
      user.password= user.password;
      user.status= user.status;
      user.addresses= [{
          fullAddress: user.fullAddress,
          city: city || user.city,
          district: user.district,
          province: user.province,
          zipCode: user.zipCode,
          isDefault: user.isDefault,
      }];
      // user.profileImage= profileImage || user.profileImage;
      user.passwordChangedDate= user.passwordChangedDate;
      user.joinedDate= user.joinedDate;

    const updateUser = await user.save();

    console.log(updateUser);


    res.status(201).json(updateUser);

  }else{
    res.status(404).send({message: 'user cannot update'});
  }
}




export const updatestatus = async (req, res) => {
  const id = req.params.id;
  const user = await UserModal.findById(id);

  if (user){
    const {status} = req.body;
    console.log(status);
    // const profileImage = req.files;


    user.status= status;

    const updateUser = await user.save();

    console.log(updateUser);

    res.status(201).json(updateUser);

  }else{
    res.status(404).send({message: 'status cannot update'});
  }
}




export const getAllUsers = async(req,res) => {
  const users = await UserModal.find({});
  res.send(users);
}

export const getUser = async(req,res) => {
  const user = await UserModal.findById(req.params.id);

  if (user){
    res.status(201).json(user);
  }else{
    res.status(500).json({ message: "Something went wrong" });
  }

}



export const updatePassword = async (req, res) => {
  const id = req.params.id;
  const user = await UserModal.findById(id);

  try{
    if (user){
      const {password} = req.body;
      
      console.log(password);

      const hashedPassword = encrypt(password);


      user.password = hashedPassword || user.password;

      const updateuser = await user.save();

      const decryptPassword = decrypt(hashedPassword);
      sendmail(user.email, decryptPassword)

      res.status(201).json(updateuser);
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
}
  



  export const deleteUser = async(req,res) => {
    const product = await UserModal.findByIdAndDelete(req.params.id)
    if(product){
        res.send({message: 'Deleted successfully'});
    }else{
        res.status(404).send({message: 'user not found'});
    }
}
