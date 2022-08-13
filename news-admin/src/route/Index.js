import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
// import { CustomerProvider } from "../pages/panel/e-commerce/customer/CustomerContext";

import { RedirectAs404 } from "../utils/Utils";


import EcomDashboard from "../pages/panel/e-commerce/index";


import Addeditors from "../pages/panel/e-commerce/editors/addeditors";
import EditorList from "../pages/panel/e-commerce/editors/editorList";

import Addnews from "../pages/panel/e-commerce/news/addnews";
import SportNews from "../pages/panel/e-commerce/news/sportlist";
import Technews from "../pages/panel/e-commerce/news/techlist";
import Gallerynews from "../pages/panel/e-commerce/news/gallerylist";
import Newslist from "../pages/panel/e-commerce/news/newslist";
import Editnews from "../pages/panel/e-commerce/news/editnews";

import Categories from "../pages/panel/e-commerce/catergory/categories";


const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/*Panel */}
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={EcomDashboard}></Route>


        
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/addeditors`} component={Addeditors}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/editorList`} component={EditorList}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/addnews`} component={Addnews}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/sportlist`} component={SportNews}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/techlist`} component={Technews}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/gallerylist`} component={Gallerynews}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/newslist`} component={Newslist}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/editnews/:id`} component={Editnews}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/categories`} component={Categories}></Route>



        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense >
  );
};
export default Pages;
