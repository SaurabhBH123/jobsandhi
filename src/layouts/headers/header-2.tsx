
// "use client"
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Menus from "./component/menus";
// import logo from "@/assets/images/logo/logo.png";

// import useSticky from "@/hooks/use-sticky";
// import LoginModal from "@/app/components/common/popup/login-modal";

// const HeaderTwo = () => {
//   const { sticky } = useSticky()
//   return (
//     <>
//       <header className={`theme-main-menu menu-overlay sticky-menu ${sticky ? 'fixed' : ''}`}
//       style={{backgroundColor:'green'}}>
//         <div className="inner-content position-relative">
//           <div className="top-header">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="logo order-lg-0">
//                 <Link href="/" className="d-flex align-items-center">

//                     <Image
//                       src={logo}
//                       alt="logo"
//                       priority
//                       width={100}  // Set the desired width
//                       height={50}  // Set the desired height
//                       className="logo-image"
//                     />
//                     <span className="fw-bold ms-3">JOB ASSISTANCE CENTER</span>

//                 </Link>
//               </div>
//               {/* <div className="right-widget ms-auto ms-lg-0 order-lg-3">
//                 <ul className="d-flex align-items-end style-none">
//                    <li>
//                   <a
//                     href="#"
//                     className="fw-500 text-dark"
//                     data-bs-toggle="modal"
//                     data-bs-target="#loginModal"
//                   >
//                     Login
//                   </a>
//                 </li> 
//                    <li className="d-none d-md-block ms-4">
//                   <Link href="/register" className="btn-five">
//                     Register
//                   </Link>
//                 </li> 
//                 </ul> 
//               </div> */}
//               <nav className="navbar navbar-expand-lg p0 ms-3 ms-lg-0 order-lg-2">
//                 <button
//                   className="navbar-toggler d-block d-lg-none"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarNav"
//                   aria-controls="navbarNav"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <span></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                   <ul className="navbar-nav">
//                     <li className="d-block d-lg-none">
//                       <div className="logo">
//                         <Link href="/" className="d-block">
//                           <Image src={logo} alt="logo" width="100" priority />
//                         </Link>
//                       </div>
//                     </li>
//                     <Menus />
//                     <li className="d-md-none mt-5">
//                       <Link href="/register" className="btn-five w-100">
//                         Register
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </header>
//       {/* login modal start */}
//       <LoginModal />
//       {/* login modal end */}
//     </>
//   );
// };

// export default HeaderTwo;

"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menus from "./component/menus";
import logo from "@/assets/images/logo/logo.png";
import useSticky from "@/hooks/use-sticky";
import LoginModal from "@/app/components/common/popup/login-modal";

interface HeaderTwoProps {
  scrollToContact: () => void; // Define the type of scrollToContact
}

const HeaderTwo: React.FC<HeaderTwoProps> = ({ scrollToContact }) => {
  const { sticky } = useSticky();

  return (
    <>
      <header
        className={`theme-main-menu menu-overlay sticky-menu ${sticky ? 'fixed' : ''}`}
        style={{
          backgroundColor: '#4169E1',
          padding: '10px 0', // Minimize the padding to reduce the height
        }}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image
                    src={logo}
                    alt="logo"
                    priority
                    width={80} // Adjust the logo width to fit better
                    height={40} // Adjust the logo height to fit better
                    className="logo-image"
                  />
                  <span
                    className="fw-bold ms-3"
                    style={{ fontSize: '16px', lineHeight: '40px', color:'white' }} // Align the text vertically with the logo
                  >
                    JOB ASSISTANCE CENTER
                  </span>
                </Link>
              </div>
              <nav className="navbar navbar-expand-lg p0 ms-3 ms-lg-0 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="d-block d-lg-none">
                      <div className="logo">
                        <Link href="/" className="d-block">
                          <Image src={logo} alt="logo" width="80" height="40" priority />
                        </Link>
                      </div>
                    </li>
                    {/* <Menus /> */}
                    <ul className="navbar-nav" id="Nik"><li className="d-block d-lg-none"><div className="logo"><a className="d-block" href="/">
                      <img alt="logo" fetchPriority="high" width="80" height="40" decoding="async" data-img="1" style={{ color: "transparent" }} srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5deaae96.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5deaae96.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5deaae96.png&amp;w=256&amp;q=75" /></a></div></li><li  className="nav-item"><a className="nav-link" style={{ color: 'white' }} role="button" href="/">Home </a></li><li className="nav-item"><a className="nav-link" style={{ color: 'white' }} role="button" href="/">Blog</a></li><li className="nav-item"><a className="nav-link" style={{ color: 'white' }} role="button" href="#" onClick={scrollToContact}>Contact</a></li><li className="nav-item"><a className="nav-link" style={{ color: 'white' }} role="button" href="">About US</a></li><li className="d-md-none mt-5"><a className="btn-five w-100" href="/register">Register</a></li></ul>
                    <li className="d-md-none mt-5">
                      <Link href="/register" className="btn-five w-100">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* login modal start */}
      <LoginModal />
      {/* login modal end */}
    </>
  );
};

export default HeaderTwo;
