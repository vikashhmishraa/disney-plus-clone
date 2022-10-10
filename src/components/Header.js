import React, { useEffect } from "react";
import styled from "styled-components";
import {   Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { auth, provider} from '../firebase'
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut} from '../features/user/userSlice'

import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)


  useEffect(() => {
    auth.onAuthStateChanged(async (  user )  =>  {
      if(user) {
        dispatch(setUserLogin ({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL

        }) )

        history.push("/home")
      }
    })
    
  }, [])





  const signIn = () => {
  auth.signInWithPopup(provider)
  .then((result) => {

    let user = result.user
        console.log(result)
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,

          photo: user.photoURL

        }))
  })
  }



  const signOut = () => {
    auth.signOut()
    .then(()  =>  {

      dispatch(setSignOut());

      history.push("/login")
    })
    history.push("/home")
  }







  return (
    <div>
      <Nav>
        <Link to="/home">
        <Logo src="/images/logo.svg" />
        </Link>


{/* 
        { !userName ? (
          <LoginContainer>
            <Login onClick={signIn}>LOGIN</Login>
          </LoginContainer>
        ) : 


        <> */}
            <NavMenu>
              <a>
              <Link to="/home">
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
              </Link>
              </a>
              <a>
                <img src="/images/search-icon.svg" />
                <span>SEARCH</span>
              </a>
              <a>
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
              </a>
              <a>
                <img src="/images/original-icon.svg" />
                <span>ORIGINALS</span>
              </a>
              <a>
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
              </a>
              <a>
                <img src="/images/series-icon.svg" />
                <span>SERIES</span>
              </a>
            </NavMenu>
            <UserImg 
            onClick={signOut} 
            src="https://lh3.googleusercontent.com/ogw/ADea4I52z2TNB38W6k2BYYcvldKQOVTrD6wkbUBJlOPu=s64-c-mo" />
        {/* </>

        } */}
        
      </Nav>
    </div>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 33px;
  overflow-x: hidden;
  font-weight: bold;
  span{
    margin-left: 2.5px;
  }

`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    text-decoration:none;
    color: rgba(251, 251, 251, 0.8);
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.98) 0s;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }

    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;



const Login = styled.div`
border: 1px solid #f9f9f9;
padding: 8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;


&:hover{
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
}
`

const LoginContainer = styled.div`

flex: 1;
display: flex;
justify-content: flex-end;



`