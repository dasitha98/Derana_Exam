import React, { useEffect, useState } from "react";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import Derana from "../images/ada derana 2.png";
import LogoDark from "../../images/logo-chrysalis.svg";
import { Form, FormGroup, Spinner, Alert } from "reactstrap";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Signin, SigninToken } from "../../actions/auth";

const Login = () => {

  const dispatch = useDispatch();
  
  const tokenlist = useSelector((state) => state?.token);

  const [newDetails, setNewDetails] = useState({email: '', password: ''});
  const listDetails = useSelector((state) => state?.auth);

  useEffect(() => {
    setNewDetails({email: listDetails.email, password: listDetails.password})
  },[listDetails]);



  const [userDetails, setUserDetails] = useState({email: '', password: ''});
  const handleChange = (e) => setUserDetails({ ...userDetails, [e.target.id]: e.target.value });


  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");


  const formData = new FormData()
  formData.append("email", userDetails.email);
  formData.append("password", userDetails.password);

  
  useEffect(() => {
    dispatch(Signin(formData));
    dispatch(SigninToken(formData));
  },[userDetails]);

  
  const onFormSubmit = () => {
    setLoading(true);
  
    if (userDetails.email === newDetails.email && userDetails.password === newDetails.password) {
      localStorage.setItem("accessToken", tokenlist);
      setTimeout(() => {
        window.history.pushState(
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
          "auth-login",
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
        );
        window.location.reload();
      }, 2000);
    } else {
      setTimeout(() => {
        setError("Cannot login with credentials");
        setLoading(false);
      }, 2000);
    }
  };

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Login" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
              <img className="logo-dark logo-img logo-img-lg" src={Derana} alt="logo-dark" />
            </Link>
          </div>

          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Sign-In</BlockTitle>
              </BlockContent>
            </BlockHead>
            {errorVal && (
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {" "}
                  <Icon name="alert-circle" /> Unable to login with credentials{" "}
                </Alert>
              </div>
            )}
            <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    onChange={handleChange}
                    id="email"
                    name="email"
                    ref={register({ required: "This field is required" })}
                    placeholder="Enter your email address or username"
                    className="form-control-lg form-control"
                  />
                  {errors.email && <span className="invalid">{errors.email.message}</span>}
                </div>
              </FormGroup>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                  password
                  </label>
                  <Link className="link link-primary link-sm" to={`${process.env.PUBLIC_URL}/auth-reset`}>
                    Forgot Code?
                  </Link>
                </div>
                <div className="form-control-wrap">
                  <a
                    href="#password"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPassState(!passState);
                    }}
                    className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                  >
                    <Icon name="eye" className="passcode-icon icon-show"></Icon>

                    <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                  </a>
                  <input
                    type={passState ? "text" : "password"}
                    onChange={handleChange}
                    id="password"
                    name="password"
                    ref={register({ required: "This field is required" })}
                    placeholder="Enter your password"
                    className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                  />
                  {errors.password && <span className="invalid">{errors.password.message}</span>}
                </div>
              </FormGroup>
              <FormGroup>
                <Button size="lg" className="btn-block" type="submit" color="primary">
                  {loading ? <Spinner size="sm" color="light" /> : "Sign in"}
                </Button>
              </FormGroup>
            </Form>
            <div className="form-note-s2 text-center pt-4">
              {" "}
              New on our platform? <Link to={`${process.env.PUBLIC_URL}/auth-register`}>Create an account</Link>
            </div>
          </PreviewCard>
        </Block>
      </PageContainer>
    </React.Fragment>
  );
};
export default Login;













// import React, { useEffect, useState } from "react";
// import {
//   Block,
//   BlockContent,
//   BlockDes,
//   BlockHead,
//   BlockTitle,
//   Button,
//   Icon,
//   PreviewCard,
// } from "../../components/Component";
// import Logo from "../../images/logo-chrysalis.svg";
// import LogoDark from "../../images/logo-chrysalis.svg";
// import { Form, FormGroup, Spinner, Alert } from "reactstrap";
// import PageContainer from "../../layout/page-container/PageContainer";
// import Head from "../../layout/head/Head";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { Signin } from "../../actions/auth";

// const Login = () => {

//   const dispatch = useDispatch();
  

//   const [newDetails, setNewDetails] = useState({email: '', password: ''});
//   const listDetails = useSelector((state) => state?.auth);
//   console.log("newDetails.email", newDetails.email)
//   console.log("newDetails.password", newDetails.password)

//   useEffect(() => {
//     setNewDetails({email: listDetails.email, password: listDetails.password})
//   },[listDetails]);



//   const [userDetails, setUserDetails] = useState({email: '', password: ''});
//   const handleChange = (e) => setUserDetails({ ...userDetails, [e.target.id]: e.target.value });


//   const [loading, setLoading] = useState(false);
//   const [passState, setPassState] = useState(false);
//   const [errorVal, setError] = useState("");


//   const formData = new FormData()
//   formData.append("email", userDetails.email);
//   formData.append("password", userDetails.password);

//   console.log("userDetails.name",userDetails.email);
//   console.log("userDetails.password",userDetails.password);

//   dispatch(Signin(formData));


  
//   const onFormSubmit = () => {
//     setLoading(true);
  
//     if (userDetails.email === newDetails.email && userDetails.password === newDetails.password) {
//       localStorage.setItem("accessToken", "token");
//       setTimeout(() => {
//         window.history.pushState(
//           `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
//           "auth-login",
//           `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
//         );
//         window.location.reload();
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         setError("Cannot login with credentials");
//         setLoading(false);
//       }, 2000);
//     }
//   };

//   const { errors, register, handleSubmit } = useForm();

//   return (
//     <React.Fragment>
//       <Head title="Login" />
//       <PageContainer>
//         <Block className="nk-block-middle nk-auth-body  wide-xs">
//           <div className="brand-logo pb-4 text-center">
//             <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
//               <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
//               <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
//             </Link>
//           </div>

//           <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
//             <BlockHead>
//               <BlockContent>
//                 <BlockTitle tag="h4">Sign-In</BlockTitle>
//               </BlockContent>
//             </BlockHead>
//             {errorVal && (
//               <div className="mb-3">
//                 <Alert color="danger" className="alert-icon">
//                   {" "}
//                   <Icon name="alert-circle" /> Unable to login with credentials{" "}
//                 </Alert>
//               </div>
//             )}
//             <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
//               <FormGroup>
//                 <div className="form-label-group">
//                   <label className="form-label" htmlFor="email">
//                     Email
//                   </label>
//                 </div>
//                 <div className="form-control-wrap">
//                   <input
//                     type="text"
//                     onChange={handleChange}
//                     id="email"
//                     name="email"
//                     ref={register({ required: "This field is required" })}
//                     defaultValue="dasitha@gmail.com"
//                     placeholder="Enter your email address or username"
//                     className="form-control-lg form-control"
//                   />
//                   {errors.email && <span className="invalid">{errors.email.message}</span>}
//                 </div>
//               </FormGroup>
//               <FormGroup>
//                 <div className="form-label-group">
//                   <label className="form-label" htmlFor="password">
//                   password
//                   </label>
//                   <Link className="link link-primary link-sm" to={`${process.env.PUBLIC_URL}/auth-reset`}>
//                     Forgot Code?
//                   </Link>
//                 </div>
//                 <div className="form-control-wrap">
//                   <a
//                     href="#password"
//                     onClick={(ev) => {
//                       ev.preventDefault();
//                       setPassState(!passState);
//                     }}
//                     className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
//                   >
//                     <Icon name="eye" className="passcode-icon icon-show"></Icon>

//                     <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
//                   </a>
//                   <input
//                     type={passState ? "text" : "password"}
//                     onChange={handleChange}
//                     id="password"
//                     name="password"
//                     defaultValue="das"
//                     ref={register({ required: "This field is required" })}
//                     placeholder="Enter your password"
//                     className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
//                   />
//                   {errors.password && <span className="invalid">{errors.password.message}</span>}
//                 </div>
//               </FormGroup>
//               <FormGroup>
//                 <Button size="lg" className="btn-block" type="submit" color="primary">
//                   {loading ? <Spinner size="sm" color="light" /> : "Sign in"}
//                 </Button>
//               </FormGroup>
//             </Form>
//             <div className="form-note-s2 text-center pt-4">
//               {" "}
//               New on our platform? <Link to={`${process.env.PUBLIC_URL}/auth-register`}>Create an account</Link>
//             </div>
//           </PreviewCard>
//         </Block>
//       </PageContainer>
//     </React.Fragment>
//   );
// };
// export default Login;
