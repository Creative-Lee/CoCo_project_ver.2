import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { firestore, auth } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

import {
  Layout,
  ProductList,
  Home,
  Community,
  SignUp,
  SignIn,
  Mypage,
  Thanks,
  Cs,
} from './components';
import CartContainer from './containers/CartContainer';
import DetailContainer from './containers/DetailContainer';

import {
  cartIcon,
  coconut,
  discountBanner,
  instaIcon,
  jjongLogo2,
  searchIcon,
  poster,
} from './img/useful';
import {
  profile2,
  profile4,
  profile5,
  profile6,
  profile7,
} from './img/profile16.9';
import brother2 from './img/brother/brother2.jpg';

export default function App() {
  const navigate = useNavigate();

  const [isOffCanvasShow, setIsOffCanvasShow] = useState(false);

  const [isTopBannerAdsShow, setIsTopBannerAdsShow] = useState(false);

  const [topNavActiveTap, setTopNavActiveTap] = useState('community');
  const [topNavOpenTap, setTopNavOpenTap] = useState(false);
  const [bottomNavActiveTap, setBottomNavActiveTap] = useState('home');

  /* BottomNav show, hide 관련 */
  const [isBottomNavShow, setIsBottomNavShow] = useState(true);
  const [isMouseOnHeader, setIsMouseOnHeader] = useState(false);
  const [beforeScrollY, setBeforeScrollY] = useState(0);

  const changeBottomNavState = () => {
    if (isMouseOnHeader || !isScrollDown()) {
      setIsBottomNavShow(true);
    } else {
      setIsBottomNavShow(false);
    }
  };

  const isScrollDown = () => {
    const afterScrollY = window.scrollY;
    const _isScrollDown = afterScrollY - beforeScrollY >= 0;

    setBeforeScrollY(afterScrollY);

    return _isScrollDown;
  };

  const hideBottomNav = () => {
    const isScrollTop = window.scrollY === 0;

    if (!isScrollTop) {
      setIsBottomNavShow(false);
    }
  };

  const initialScroll = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const signUpEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsAuthenticated(true);
        navigate('/CoCo_project_ver.2/auth/thanks');
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case 'auth/email-already-in-use':
            alert('이미 사용중인 이메일 입니다!');
            break;

          case 'auth/weak-password':
            alert('비밀번호는 최소 6글자 이상이여야 합니다!');
            break;

          case 'auth/invalid-email':
            alert('유효하지 않은 이메일 형식입니다!');
            break;

          default:
            alert('회원가입 실패');
        }
      });
  };

  const signInEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsAuthenticated(true);
        navigate(-1);
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case 'auth/wrong-password':
            alert('비밀번호가 틀립니다!');
            break;

          case 'auth/user-not-found':
            alert('존재하지 않는 이메일입니다!');
            break;

          case 'auth/invalid-email':
            alert('유효하지 않은 이메일 형식입니다!');
            break;

          default:
            alert('로그인 실패');
        }
      });
  };

  const signOutAccount = () => {
    signOut(auth)
      .then(() => {
        navigate('/CoCo_project_ver.2');
        setIsAuthenticated(false);
      })
      .catch((error) => {
        alert('로그아웃 실패');
        console.log(error);
      });
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('로그인 상태');
        setIsAuthenticated(true);
      } else {
        console.log('로그아웃 상태');
        setIsAuthenticated(false);
      }
    });
  };

  const [clothesList, setClothesList] = useState([]);
  const [shoesList, setShoesList] = useState([]);

  const getClothesList = async (firestore) => {
    const clothesCol = collection(firestore, 'clothes');
    const clothesDoc = await getDocs(clothesCol);
    const clothesList = clothesDoc.docs.map((doc) => doc.data());

    setClothesList([...clothesList]);
  };

  const getShoesList = async (firestore) => {
    const shoesCol = collection(firestore, 'shoes');
    const shoesDoc = await getDocs(shoesCol);
    const shoesList = shoesDoc.docs.map((doc) => doc.data());

    setShoesList([...shoesList]);
  };

  useEffect(() => {
    getClothesList(firestore);
    getShoesList(firestore);
    setIsTopBannerAdsShow(true);
    getAuthState();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeBottomNavState);

    return () => {
      window.removeEventListener('scroll', changeBottomNavState);
    };
  });

  return (
    <Routes>
      // 레이아웃 적용되는 페이지 시작
      <Route
        path="/CoCo_project_ver.2"
        element={
          <Layout
            isTopBannerAdsShow={isTopBannerAdsShow}
            setIsTopBannerAdsShow={setIsTopBannerAdsShow}
            isBottomNavShow={isBottomNavShow}
            setIsBottomNavShow={setIsBottomNavShow}
            bottomNavActiveTap={bottomNavActiveTap}
            setBottomNavActiveTap={setBottomNavActiveTap}
            topNavActiveTap={topNavActiveTap}
            setTopNavActiveTap={setTopNavActiveTap}
            topNavOpenTap={topNavOpenTap}
            setTopNavOpenTap={setTopNavOpenTap}
            coconut={coconut}
            jjongLogo2={jjongLogo2}
            cartIcon={cartIcon}
            searchIcon={searchIcon}
            instaIcon={instaIcon}
            isAuthenticated={isAuthenticated}
            signOutAccount={signOutAccount}
            isOffCanvasShow={isOffCanvasShow}
            setIsOffCanvasShow={setIsOffCanvasShow}
            setIsMouseOnHeader={setIsMouseOnHeader}
            hideBottomNav={hideBottomNav}
            initialScroll={initialScroll}
          />
        }
      >
        <Route
          index
          element={
            <Home
              setTopNavActiveTap={setTopNavActiveTap}
              setBottomNavActiveTap={setBottomNavActiveTap}
              discountBanner={discountBanner}
              brother2={brother2}
              profile2={profile2}
              profile4={profile4}
              profile5={profile5}
              profile6={profile6}
              profile7={profile7}
            />
          }
        />

        <Route
          path="community/:community_category_param"
          element={
            <Community
              setTopNavActiveTap={setTopNavActiveTap}
              setBottomNavActiveTap={setBottomNavActiveTap}
            />
          }
        />

        <Route
          path=":product_param/:category_param"
          element={
            <ProductList
              clothesList={clothesList}
              shoesList={shoesList}
              setTopNavActiveTap={setTopNavActiveTap}
              setBottomNavActiveTap={setBottomNavActiveTap}
            />
          }
        />

        <Route
          path="detail/:product_id"
          element={
            <DetailContainer
              clothesList={clothesList}
              shoesList={shoesList}
              topNavActiveTap={topNavActiveTap}
              initialScroll={initialScroll}
            />
          }
        />

        <Route
          path="cart"
          element={
            <CartContainer
              setTopNavActiveTap={setTopNavActiveTap}
              setBottomNavActiveTap={setBottomNavActiveTap}
            />
          }
        />

        <Route
          path="mypage"
          element={
            <Mypage
              setTopNavActiveTap={setTopNavActiveTap}
              setBottomNavActiveTap={setBottomNavActiveTap}
            />
          }
        />
        <Route
          path="cs"
          element={
            <Cs
              setTopNavActiveTap={setTopNavActiveTap}
              setBottomNavActiveTap={setBottomNavActiveTap}
            />
          }
        />
      </Route>
      // 레이아웃 적용되는 페이지 끝
      <Route
        path="/CoCo_project_ver.2/auth/sign_in"
        element={<SignIn signInEmail={signInEmail} jjongLogo2={jjongLogo2} />}
      />
      <Route
        path="/CoCo_project_ver.2/auth/sign_up"
        element={<SignUp signUpEmail={signUpEmail} jjongLogo2={jjongLogo2} />}
      />
      <Route
        path="/CoCo_project_ver.2/auth/thanks"
        element={<Thanks jjongLogo2={jjongLogo2} poster={poster} />}
      />
    </Routes>
  );
}
