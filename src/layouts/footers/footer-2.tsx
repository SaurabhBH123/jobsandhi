// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// // internal
// import logo from '@/assets/images/logo/logo_04.png';
// import shape from '@/assets/images/shape/shape_28.svg';
// import { WidgetOne, WidgetThree, WidgetTwo } from './component/footer-widgets';
// import SocialLinks from './component/social-links';

// const FooterTwo = () => {
//   return (
//     <div className="footer-one">
//       <div className="container">
//         <div className="inner-wrapper">
//           <div className="row justify-content-between">
//             <div className="col-xl-4 col-lg-3 footer-intro mb-15">
//               <div className="logo mb-25">
//                 <Link href="/" className="d-flex align-items-center">
//                   <Image src={logo} alt="logo" priority />
//                 </Link>
//               </div>
//               <a href="#" className="email fw-500">jobisupport@new.com</a>
//               <Image src={shape} alt="shape" className="lazy-img mt-50 sm-mt-30 sm-mb-20" />
//             </div>
//             {/* widget one */}
//             <WidgetOne cls='col-lg-2 col-sm-4' />
//             {/* widget two */}
//             <WidgetTwo cls='col-lg-2 col-sm-4' />
//             {/* widget three */}
//             <WidgetThree cls='col-xl-2 col-lg-3 col-sm-4' />
//             {/* widget end */}
//           </div>
//         </div>
//       </div>
//       <div className="bottom-footer">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-4 order-lg-3 mb-15">
//               <ul className="style-none d-flex order-lg-last justify-content-center justify-content-lg-end social-icon">
//                 <SocialLinks />
//               </ul>
//             </div>
//             <div className="col-lg-4 order-lg-1 mb-15">
//               <ul className="d-flex style-none bottom-nav justify-content-center justify-content-lg-start">
//                 <li><Link href='/contact'>Privacy & Terms.</Link></li>
//                 <li><Link href='/contact'> Contact Us</Link></li>
//               </ul>
//             </div>
//             <div className="col-lg-4 order-lg-2">
//               <p className="text-center mb-15">Copyright @2024 powered by Goanny</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FooterTwo;


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Internal imports
import logo from '@/assets/images/logo/logo_01.png';
import shape from '@/assets/images/shape/shape_28.svg';
import { WidgetOne, WidgetThree, WidgetTwo } from './component/footer-widgets';
import SocialLinks from './component/social-links';

const FooterTwo = () => {
  return (
    <footer className="footer-one">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-3 footer-intro mb-15">
              <div className="logo mb-25">
                <Link href="/" className="d-flex align-items-center">
                <Image
                    src={logo}
                    alt="logo"
                    priority
                    width={100} // Adjust the logo width to fit better
                    height={60} // Adjust the logo height to fit better
                    className="logo-image"
                    />
                </Link>
              </div>
              <a href="mailto:jobisupport@new.com" className="email fw-500">jobisupport@new.com</a>
              <Image src={shape} alt="decorative shape" className="lazy-img mt-50 sm-mt-30 sm-mb-20" />
            </div>
            {/* Widget One */}
            <WidgetOne cls='col-lg-2 col-sm-4' />
            {/* Widget Two */}
            <WidgetTwo cls='col-lg-2 col-sm-4' />
            {/* Widget Three */}
            <WidgetThree cls='col-xl-2 col-lg-3 col-sm-4' />
          </div>
        </div>
      </div>
      <div className="bottom-footer" style={{ backgroundColor: '#333' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 order-lg-3 mb-15">
              <ul className="style-none d-flex order-lg-last justify-content-center justify-content-lg-end social-icon">
                <SocialLinks  />
              </ul>
            </div>
            <div className="col-lg-4 order-lg-1 mb-15">
              <ul className="d-flex style-none bottom-nav justify-content-center justify-content-lg-start">
                <li ><Link href='/privacy' style={{color:'white'}}>Privacy & Terms.</Link></li>
                <li ><Link href='/contact' style={{color:'white'}}>Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 order-lg-2">
              <p className="text-center mb-15" style={{color:'white'}}>Copyright ©2024 powered by Goanny</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
