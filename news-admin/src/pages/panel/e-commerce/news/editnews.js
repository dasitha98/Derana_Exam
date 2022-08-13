import React, { useContext, useEffect, useState } from "react";
import Content from "../../../../layout/content/Content";
import Head from "../../../../layout/head/Head";
import {
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  UncontrolledDropdown,
  Modal,
  ModalBody,
  DropdownItem,
  Form,
} from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Col,
  UserAvatar,
  PaginationComponent,
  Button,
  DataTableHead,
  DataTableRow,
  DataTableItem,
  TooltipComponent,
  RSelect,
  PreviewAltCard,
  PreviewCard,
} from "../../../../components/Component";
import { findUpper } from "../../../../utils/Utils";
import { useForm } from "react-hook-form";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from "react-redux";
import { Addnew, Getnews, Updatenews } from '../../../../actions/news.js'
import Select from 'react-select'
import { useHistory, useParams } from "react-router-dom";

import {app} from '../firebase'

const db = app.firestore()
const storage = app.storage();



const Editnews = () => {

  const dispatch = useDispatch();
  const { id } = useParams()
  const navigate = useHistory();

  useEffect(()=>{
    dispatch(Getnews(id));
  },[id])

  const listDetails = useSelector((state) => state?.news);
  const [userDetails, setUserDetails] = useState({title: '', description: '', category: ''});

console.log("userDetails",userDetails.title);
console.log("userDetails",userDetails.description);
console.log("userDetails",userDetails.category);

  useEffect(()=>{
      setUserDetails({title: listDetails.title, description: listDetails.description, category: listDetails.category})
  },[listDetails])

  
  const handleChange = (e) => setUserDetails({ ...userDetails, [e.target.id]: e.target.value });




  const handleForm = async (e) => {

    //need to upload to firebase
    e.preventDefault();

      

        const formData = new FormData()
        formData.append("title", userDetails.title);
        formData.append("description", userDetails.description);
        formData.append("category", userDetails.category);

        console.log(userDetails.title)
        console.log(userDetails.description)
        console.log(userDetails.category)


        dispatch(Updatenews(id,formData));
        
        navigate.push(`/ecommerce/newslist`);

};




  return (
    <React.Fragment>
      <Head title="User List - Default"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle  page>
                <h3 style={{"color":"#5A2C91"}}>ADD NEWS</h3>
              </BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
            
        <div class="container">
        <form onSubmit={handleForm}>
          <div class="row pb-5">
            <div class="col col-lg-6">
              <p class="h5 pb-2">Title</p>
              <input defaultValue={userDetails.title} onInput={handleChange} id="title" name="title"
               class="form-control no-border w-90" />
            </div>
            <div class="col col-lg-6">
              <p class="h5 pb-2">Select News Category</p>
              <input defaultValue={userDetails.category} onInput={handleChange} id="category" name="category"
               class="form-control no-border w-90" disabled />
            </div>
          </div>

          <div class="row">
            <div class="col col-lg-12">
              <p class="h5 pb-1">Description</p>
              <p class="pb-1">Mention a description about News</p>
              <textarea defaultValue={userDetails.description}
               onInput={handleChange} id="description" name="description"
               class="form-control no-border w-100" rows="2" ></textarea>
            </div>
          </div>



          <div class="row ">
          <div class="col col-lg-12 d-flex justify-content-end">
            <button type="submit" class="btn mt-3 btn-lg" style={{"background-color": "#5A2C91", "color": "white"}}>Save</button>
            </div>
          </div>

          
        </form>
        </div>
        </Block>
        
      </Content>
    </React.Fragment>
  );
};
export default Editnews;
