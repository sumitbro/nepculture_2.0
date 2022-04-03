import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Profile.css";
import { Redirect } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { load_user } from '../../actions/auth';
import {getstore} from "../../actions/user_actions";
// import {store,isloading} from "../../reducers/Userreducer";
// import { logout } from "../actions/auth";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import StoreInfoPanel from "./StoreInfoPanel/StoreInfoPanel";
import Createstoreform from "./StoreInfoPanel/Createstoreform";


let tokenparse = [];
let tokenready = false;
const Profile = () => {
  const [showForm,setshowForm]=useState(false);
  const [storeCreated,setStoreCreated]= useState(false);
  const {access}= useSelector((state)=>state.auth)
  const { user,store, isloading } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    if (access !== null && access !== "undefined") {
      tokenparse = (access);
      // console.log(tokenparse)
      tokenready = (access !== null && access !== "undefined")
      
      dispatch(load_user(tokenparse?.id));
      dispatch(getstore(tokenparse?.id))
    }
    if(!isloading){
      if(store?.length!==0){
        setStoreCreated(true);
      }
    }
  }, [dispatch, isloading, store])

  return (
    <div className="profile">
      <div className="details">
        <div className="perss_image">
          <img
            src="https://www.mona.com.np/get-image/320/11080597_812161728874301_6862044761280076146_o_1619417088-resized320.jpg"
            alt="JR"
          />
        </div>
        <div className="per_container">
          <h1> Personal Information {user.id} </h1>
          <div className="per_info">
            <div className="per_info1">
              <p>Name </p>
              <p>E-mail: </p>
              <p>Address: </p>
              <p>Experience: </p>
              <p>Field of expertise: </p>
              <p>Phone: </p>
              <p>Designation: </p>
            </div>
            <div className="per_info2">
              <p>{user?.username}</p>
              <p>{user?.email}</p>
              <p>{user?.address}</p>
              <p>2 years</p>
              <p>Newari Cultural Arts</p>
              <p>{user?.phone}</p>
              <p>Contemporary Artists</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Store</h1>
        <h5>{storeCreated?'Your Store':'Become a seller'}</h5>
        {storeCreated?<span></span>:showForm?<div></div>:<button onClick={()=>setshowForm(true)}>Create Store</button>}
        {storeCreated?<StoreInfoPanel store={store} isloading= {isloading}/>:showForm?<Createstoreform/>:<span></span>}
      </div>
      <br/>
      <br/>
      <br/>
      {/* <button onCLick={onClick}></button> */}

      <div className="social">
        <h1>Find me on</h1>
        <div className="media_profiles">
          <a
            href="https://www.youtube.com/channel/UCD2vZrEafNv9BYp1IJUMvjA/featured"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/jeevan.rajopadhyay"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/jeevanrajopadhyay/"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/jeevan-rajopadhyay-a2785446?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOZGxZ95sQFGQra5XZVGQLQ%3D%3D"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

// export default Profile;



export default Profile;