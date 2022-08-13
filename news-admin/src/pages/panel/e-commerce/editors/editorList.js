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
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from "react-redux";
import { Getusers } from "../../../../actions/auth";

const EditorList = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
      dispatch(Getusers());
  });

  const listDetails = useSelector((state) => state?.auth);


  const [modal, setModal] = useState({
    show: false,
  });

  const onFormCancel = () => {
    setModal({ show: false});
  };

    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

  return (
    <React.Fragment>
      <Head title="User List - Default"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle  page>
                <h3 style={{"color":"#5A2C91"}}>ADMINS & EDITORS</h3>
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
              
                <div className="toggle-expand-content" >
                  <ul className="nk-block-tools g-3">
                    <li>
                    <Link to="/ecommerce/addeditors">
                      <Button style={{"background-color":"#5A2C91"}} className="btn-icon pr-2 pl-1">
                        <Icon name="plus" style={{"color": "white"}}></Icon><span className="pl-0" style={{"color": "white"}}>New Editors</span>
                      </Button>
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
            <div className="nk-tb-list is-separate is-medium mb-3">
                <DataTableRow className="nk-tb-col-check">
                  <div className="custom-control custom-control-sm custom-checkbox notext">
                    <input
                      type="checkbox"
                      className="custom-control-input form-control"
                      // onChange={(e) => selectorCheck(e)}
                      id="uid"
                    />
                    <label className="custom-control-label" htmlFor="uid"></label>
                  </div>
                </DataTableRow>
                <DataTableRow size="mb">
                </DataTableRow>
                <DataTableRow size="mb">
                  <span className="sub-text">Email</span>
                </DataTableRow>
                <DataTableRow size="mb">
                  <span className="sub-text">Password No</span>
                </DataTableRow>
                <DataTableRow size="md">
                  <span className="sub-text">Role</span>
                </DataTableRow>

            {listDetails.length > 0
              ? listDetails.map((item) => (
                  <DataTableItem key={item.id}>
                    <DataTableRow className="nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext">
                        <input
                          type="checkbox"
                          className="custom-control-input form-control"
                          defaultChecked={item.checked}
                          id={item.id + "uid1"}
                          key={Math.random()}
                          // onChange={(e) => onSelectChange(e, item.id)}
                        />
                        <label className="custom-control-label" htmlFor={item.id + "uid1"}></label>
                      </div>
                    </DataTableRow>
                    <DataTableRow>
                      <Link to={`${process.env.PUBLIC_URL}/ecommerce/customer-details/${item.id}`}>
                        <div className="user-card">
                          <div className="user-info">

                          </div>
                        </div>
                      </Link>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span><b>{item.email}</b></span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span><b>**************</b></span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span><b>{item.role}</b></span>
                    </DataTableRow>

                  </DataTableItem>
                ))
              :  
              
              (
              <PreviewAltCard>
                <div className="text-center">
                <span className="text-silent">No data found</span>
                </div>
              </PreviewAltCard>
              )}

          </div>
           {/* <PreviewAltCard>
             {CustomerData.length > 0 ? (
               <PaginationComponent
                 itemPerPage={itemPerPage}
                 totalItems={data.length}
                 paginate={paginate}
                 currentPage={currentPage}
               />
              ):(
               <div className="text-center">
                 <span className="text-silent">No data found</span>
               </div>
             )}
           </PreviewAltCard> */}
        </Block>



        <Modal isOpen={modal.show} toggle={() => setModal({ show: false })} className="modal-dialog-centered" size="sm">
            <ModalBody>
            <div class="container">

                <div class="row">
                    <div class="col col-lg-12">
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
                    </div>
                </div>

                <div class="row">
                    <div class="col col-lg-12 mb-4">
                        <div class="d-flex align-items-center">
                            <h5 class="mr-5" style={{color:"red"}}><b>Desire Edwards</b></h5>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col col-lg-6">
                        <span>Contact No</span><br />
                        <b><span>0763618198</span></b>
                    </div>

                    <div class="col col-lg-6">
                        <span>Email</span><br />
                        <b><span>desiree@gmail.com</span></b>
                    </div>
                </div>

                <div class="row">
                    <div class="col col-lg-12 mt-4">
                        <span>Delivery Address</span><br />
                        <b><span>No. 259/2, Temple road, Thalapathpitiya, Nugegoda</span></b><br />
                    </div>
                </div>

                <div class="row">
                    <div class="col col-lg-12 mt-4 mb-4" >
                        <span>All Orders</span>
                    </div>
                </div>


                <div class="row ">
                    <div className="card bg-light col-12">
                        <div className="col col-lg-8">
                            <b><span style={{color:"red"}}>#95954</span></b><br></br>
                            <b>Warna Batiks</b>
                        </div>
                        <div className="col col-lg-4 mt-2">

                                <span
                                    className={`tb-status text-${
                                    "Delivered" === "Delivered" ? "red" : "Rejected" === "Rejected" ? "danger" : "warning"
                                    } 
                                    bg-${
                                        "Delivered" === "Delivered" ? "success" : "Rejected" === "Rejected" ? "danger" : "warning"
                                        }`} 
                                >
                                <span>Delivered</span>
                                </span>
                        </div>
                </div>

                </div>
            </div>
            </ModalBody>
            </Modal>
        
      </Content>
    </React.Fragment>
  );
};
export default EditorList;
