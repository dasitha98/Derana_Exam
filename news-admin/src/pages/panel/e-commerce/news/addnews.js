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
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from "react-redux";
import { Addnew } from '../../../../actions/news.js'
import Select from 'react-select'

import {app} from '../firebase'

const db = app.firestore()
const storage = app.storage();

const Addnews = () => {

  const dispatch = useDispatch();
  const navigate = useHistory();

  const[url, setUrl] = useState("")
  const[image, setImage] = useState(null)
  const [imagePreview, setImagePreviewe] = useState(null)
  
  const [userDetails, setUserDetails] = useState({title: '', description: '', category: ''});
  const handleChange = (e) => setUserDetails({ ...userDetails, [e.target.id]: e.target.value });

  const onCategoryChange = (value) => {
    setUserDetails({ ...userDetails, category: value });
  };


  const handleForm = async (e) => {

    //need to upload to firebase
    e.preventDefault();

      

        const storageRef = storage.ref()
        const fileRef = storageRef.child(image.name)
        await fileRef.put(image)
        const url = await fileRef.getDownloadURL()
        console.log(url)

        const formData = new FormData()
        formData.append("title", userDetails.title);
        formData.append("description", userDetails.description);
        formData.append("category", userDetails.category.value);
        formData.append("img", url);

        dispatch(Addnew(formData));
        
        navigate.push(`/ecommerce/newslist`);
};



  const options = [
    { value: 'Sport', label: 'Sport' },
    { value: 'Tech', label: 'Tech' },
    { value: 'Gallery', label: 'Gallery' }
  ]




    const imageHandler = e =>{
      const imageData = e.target.files[0]
      const reader = new FileReader()
      reader.onload=()=>{
        setImagePreviewe(reader.result);
      }
      reader.readAsDataURL(imageData);
    }


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
              <input onChange={handleChange} id="title" name="title"
               class="form-control no-border w-90" />
            </div>
            <div class="col col-lg-6">
              <p class="h5 pb-2">Select News Category</p>
              <Select id="category" name="category" onChange={onCategoryChange}
               options={options} />
            </div>
          </div>

          <div class="row">
            <div class="col col-lg-12">
              <p class="h5 pb-1">Description</p>
              <p class="pb-1">Mention a description about News</p>
              <textarea onChange={handleChange} id="description" name="description"
               class="form-control no-border w-100" rows="2" ></textarea>
            </div>
          </div>



          <div class="row">
            <div class="col col-lg-2">
            <p class="h5 pb-1 mt-4">Image</p>

            {image ? 
                          <div className="col-12 mt-2 mb-3">
                            <center>
                              <img className="mt-2" src={imagePreview} width="250" />
                              <button onClick={() => {
                                  setImagePreviewe(null)
                                  setImage(null)
                                }} className='btn btn-default text-danger'>Remove
                              </button>
                            </center>
                          </div>
                        :
                          <div className="col-12 mt-2 mb-3">
                              <center>
                                <label htmlFor="imagecat">
                                  <div class="bg-light p-3 py-4" width="100%" style={{"font-family": "Ubuntu", "line-height":"30px", "font-weight":700, "color":"#F04E63", "font-style":"normal", "font-size": "10px"}}>
                                    <b>Add Image</b>
                                  </div>
                                </label>
                                <input type='file' className="d-none" onChange={(e) => {
                                  setImage(e.target.files[0])
                                  imageHandler(e)
                                }} name='image' id='imagecat' />
                              </center>
                          </div>
                        }
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
export default Addnews;
