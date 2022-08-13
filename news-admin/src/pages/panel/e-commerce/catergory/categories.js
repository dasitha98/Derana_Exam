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
} from "../../../../components/Component";
import { findUpper } from "../../../../utils/Utils";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddCategory } from "../../../../actions/category";
import Dynamic from './card';

const Categories = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [details, setDetails] = useState({categoryName: ''});
  const handleChange = (e) => setDetails({ ...details, [e.target.id]: e.target.value });


  const handleForm = (e) => {

        const formData = new FormData()
        formData.append("categoryName", details.categoryName);

        console.log(details.categoryName);

        dispatch(AddCategory(formData));
        // navigate(`/`);
        // window.location.reload();
    
  };

  const [modal, setModal] = useState({
    edit: false,
    add: false,
  });

  const onFormCancel = () => {
    setModal({ edit: false, add: false });
  };

  return (
    <React.Fragment>
      <Head title="User List - Default"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>
                <h3 style={{"color":"#5A2C91"}}>VENDOR CATEGORIES</h3>
              </BlockTitle>
              {/* <BlockDes className="text-soft">
                <p>You have total 2,595 users.</p>
              </BlockDes> */}
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1`}
                  // onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div className="toggle-expand-content" >
                  <ul className="nk-block-tools g-3">
                  <li className="nk-block-tools-opt">
                      <Button style={{"background-color":"#5A2C91"}} className="btn-icon pr-2"
                        onClick={() => {
                          setModal({ add: true })
                        }}
                        >
                        <Icon name="plus" style={{"color": "white"}}></Icon><span style={{"color": "white"}}>New Category</span>
                      </Button>
                  </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
            <div className="App">
                <Dynamic />
            </div>
        </Block>


        <Modal isOpen={modal.add} toggle={() => setModal({ add: false })} className="modal-dialog-centered" size="sm">
          <ModalBody>
            <form onSubmit={handleForm}>
            <a
              href="#close"
              onClick={(ev) => {
                ev.preventDefault();
                onFormCancel();
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <div className="p-2">
                <center>
                    <h6 className="title">ADD NEW CATEGORY</h6>
                </center>
              <div className="mt-4">
                <div class="container">

                    <div className="row mb-1">
                        <div className="col-12">
                            <h6><small><b>Category Name</b></small></h6>
                        </div>
                    </div>

                    <input id="categoryName" name="categoryName" onChange={handleChange} class="form-control form-control-sm" style={{"background-color":"#F5F6FA"}}></input>

   
                    <div className="row justify-content-center mt-3">
                        <div className="col-5 align-self-center">
                            <Button type='submit' style={{"background-color":"#5A2C91"}} className="btn-sm mb-0">
                                <span style={{"color": "white"}}>Add Category</span>
                            </Button>   
                        </div>  
                    </div>   

                </div>
              </div>
            </div>
            </form>
          </ModalBody>
        </Modal>
      </Content>
    </React.Fragment>
  );
};
export default Categories;



