// "use client"
// import { useEffect, useState } from "react";

// const useSticky = () => {
//     const [sticky,setSticky] = useState(false);

//     const stickyHeader = () => {
//         if(window.scrollY > 80){
//             setSticky(true)
//         }
//         else{
//             setSticky(false)
//         }
//     }
//     useEffect(() => {
//         window.addEventListener('scroll',stickyHeader)
//     },[]);

//     return {
//         sticky,
//     }

// }

// export default useSticky;

"use client"
import { useEffect, useState } from "react";

const useSticky = () => {
    const [sticky, setSticky] = useState(false);

    const stickyHeader = () => {
        setSticky(window.scrollY > 80); // Update sticky state based on scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyHeader); // Add event listener

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', stickyHeader);
        };
    }, []); // Empty dependency array means this effect runs once on mount and unmount

    return { sticky };
};

export default useSticky;
