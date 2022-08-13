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
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import {Getsportnews, Deletenews} from '../../../../actions/news' 

const SportList = () => {

  const dispatch = useDispatch();
  const navigate = useHistory();

  useEffect(() => {
      dispatch(Getsportnews());
  });

  const listDetails = useSelector((state) => state?.news);


  function Editbutton(id){
    navigate.push(`/ecommerce/editnews/${id}`);
  }
  
  function Deletebutton(id){
    dispatch(Deletenews(id));
    window.location.reload()
  }

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('accessToken'));
    if (items) {
     setItems(items.result.role);
    }
  }, []);

  return (
    <React.Fragment>
            <Head title="pd-report"></Head>
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle>
                            <h3 style={{"color":"#5A2C91"}}>Sport News</h3>
                            </BlockTitle>
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
                    {items == "Admin" ?

                      <Link to="/ecommerce/addnews">
                        <Button style={{"background-color":"#5A2C91"}} className="btn-icon pr-2 pl-1">
                          <Icon name="plus" style={{"color": "white"}}></Icon><span className="pl-0" style={{"color": "white"}}>New News</span>
                        </Button>
                      </Link>
                      :
                      null
                    }
                  </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                    <PreviewAltCard>
                            <div className="table-wrap-mbh p-3">
                                  <h5 className="mb-4">
                                    <h5 style={{"color":"#5A2C91"}}>Sport News</h5>
                                  </h5>
                                  <hr class="bg-danger border-2 border-top border-danger"/>
                                  <Block>
                                      <div className="nk-tb-list is-separate is-medium">
                                          <DataTableHead className="nk-tb-item">
                                              <DataTableRow size="mb">
                                                  <span className="sub-text " >News Image</span>
                                              </DataTableRow>
                                              <DataTableRow size="md">
                                                  <span className="sub-text ">Title</span>
                                              </DataTableRow>
                                              <DataTableRow size="md">
                                                  <span className="sub-text">News Category</span>
                                              </DataTableRow>
                                              <DataTableRow size="md">
                                                  <span className="sub-text">Description</span>
                                              </DataTableRow>
                                              <DataTableRow size="md">
                                                  <span className="sub-text">Action</span>
                                              </DataTableRow>

                                          </DataTableHead>
                                          {/*Head*/}

                                          {listDetails.length > 0
                                              ? listDetails.map((item, index) => (
                                                  <DataTableItem key={index}>
                                                      <DataTableRow size="mb">
                                                          <img src={item.img} width="100px"></img>
                                                      </DataTableRow>
                                                      <DataTableRow size="md">
                                                          <span className="tb-amount text-black-mbh">
                                                          {item.title}
                                                          </span>
                                                      </DataTableRow>
                                                      <DataTableRow size="md">
                                                          <span className="tb-amount text-black-mbh">
                                                          {item.category}
                                                          </span>
                                                      </DataTableRow>
                                                      <DataTableRow size="md">
                                                          <span className="text-black-mbh">
                                                            {item.description}
                                                          </span>
                                                      </DataTableRow>
                                                      <DataTableRow size="md">
                                                          <span className="text-black-mbh">
                                                            <button type="button" class="btn btn-success btn-sm mr-1" onClick={(e) => Editbutton(item._id)}>Edit</button>
                                                            <button type="button" class="btn btn-danger btn-sm" onClick={(e) => Deletebutton(item._id)}>Delete</button>
                                                          </span>
                                                      </DataTableRow>
                                                      
                                                  </DataTableItem>
                                              ))
                                              : null}
                                      </div>
                                  </Block>
                              </div>
                    </PreviewAltCard>


      </Content>
    </React.Fragment>
  );
};
export default SportList;
