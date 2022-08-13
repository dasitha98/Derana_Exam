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
import Select from 'react-select'
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "../../../../actions/auth";
import { Getcategory } from "../../../../actions/category";

const NewEditors = () => {

  const dispatch = useDispatch();
  const navigate = useHistory();

  // const [Detail, setDetail] = useState([]);
  // const [Detai, setDetai] = useState([]);
  // const listDetails = useSelector((state) => state?.category);
  // // console.log(Detail);



  // useEffect(() => {
  //   dispatch(Getcategory());
  // },[]);

  // useEffect(() => {
  //   setDetail(listDetails);
  // },[listDetails]);




  const [userDetails, setUserDetails] = useState({email: '', password: '', role: ''});
  const handleChange = (e) => setUserDetails({ ...userDetails, [e.target.id]: e.target.value });

  const onCategoryChange = (value) => {
    setUserDetails({ ...userDetails, role: value });
  };

  const handleForm = (e) => {

        const formData = new FormData()
        formData.append("email", userDetails.email);
        formData.append("password", userDetails.password);
        formData.append("role", userDetails.role.value);

        console.log(userDetails.email);
        console.log(userDetails.password);
        console.log(userDetails.role.value);

        dispatch(Signup(formData));

        navigate.push('/ecommerce/editorList');
};


  const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Editor', label: 'Editor' }
  ]

  return (
    <React.Fragment>
      <Head title="User List - Default"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle  page>
                <h3 style={{"color":"#5A2C91"}}>ADD EDITOR</h3>
              </BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        
        <Block>
            
        <div class="container">
          <form onSubmit={handleForm}>
            <div class="row pb-5">
              <div class="col col-lg-6">
                <p class="h5 pb-2">Email</p>
                <input onChange={handleChange} id="email" name="email" class="form-control no-border w-90" required/>
              </div>
              <div class="col col-lg-6">
                <p class="h5 pb-2">Password</p>
                <input onChange={handleChange} id="password" name="password" class="form-control no-border w-90" required/>
              </div>
            </div>

            <div class="row">
              <div class="col col-lg-6">
                <p class="h5 pb-1">Select Role</p>
                <Select options={options} id="role" name="role" onChange={onCategoryChange} required/>
              </div>
            </div>

            <div class="row justify-content-end">
              <div class="col col-lg-2">
              <button type="submit" class="btn mt-3" style={{"background-color": "#5A2C91", "color": "white"}}>Save</button>
              </div>
            </div>
          </form>
        </div>
        </Block>
        
      </Content>
    </React.Fragment>
  );
};
export default NewEditors;
