// const Clients = () => {
//   return (
//     <div>
//       <div class="mx-auto max-w-screen-lg px-8 pt-20 pb-16 text-gray-700 md:pt-24 md:pb-20">
//         <div class="flex flex-wrap">
//           <div class="w-full max-w-full flex-shrink-0 lg:mt-2 lg:w-1/3 lg:flex-none">
//             <h2 class="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 xl:text-base">
//               Our Clients
//             </h2>
//             <h3 class="mb-3 font-bold text-gray-800 sm:text-2xl xl:text-4xl">
//               Trusted by over 300+ clients
//             </h3>
//             <p class="">
//               We bring solutions to make life easier for our customers.
//             </p>
//           </div>
//           <div class="w-full max-w-full py-10 lg:w-2/3 lg:flex-none lg:px-8 lg:py-0">
//             <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
//               <div class="w-32">
//                 <img src="https://www.thestreet.com/.image/t_share/MjAxNDQ4NzE2MTczODQ2MDY5/spacex_lead_db_101223.jpg" alt="" class="" />
//               </div>
//               <div class="w-32 rounded-lg">
//                 <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=600&name=image8-2.jpg" alt="" class="" />
//               </div>
//               <div class="w-32  rounded-lg">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS_Hy9BCdFCV5AUrytEqNqgEtPZnk41chOQ&s" alt="" class="" />
//               </div>
//               <div class="w-32  rounded-lg">
//                 <img src="https://www.thestreet.com/.image/t_share/MjAxNDQ4NzE2MTczODQ2MDY5/spacex_lead_db_101223.jpg" alt="" class="" />
//               </div>
//               <div class="w-32  rounded-lg">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS_Hy9BCdFCV5AUrytEqNqgEtPZnk41chOQ&s" alt="" class="" />
//               </div>
//               <div class="w-32  rounded-lg">
//                 <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=600&name=image8-2.jpg" alt="" class="" />
//               </div>
//               <div class="w-32  rounded-lg">
//                 <img src="https://www.thestreet.com/.image/t_share/MjAxNDQ4NzE2MTczODQ2MDY5/spacex_lead_db_101223.jpg" alt="" class="" />
//               </div>
//               <div class="w-32  rounded-lg">
//                 <img src="https://www.thestreet.com/.image/t_share/MjAxNDQ4NzE2MTczODQ2MDY5/spacex_lead_db_101223.jpg" alt="" class="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Clients;

// ---------------------------------------------------



const Clients = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-lg px-8 pt-20 pb-16 text-gray-700 md:pt-24 md:pb-20">
        <div className="flex flex-wrap">
          <div className="w-full max-w-full flex-shrink-0 lg:mt-2 lg:w-1/3 lg:flex-none">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 xl:text-base">
              Our Clients
            </h2>
            <h3 className="mb-3 font-bold text-gray-800 sm:text-2xl xl:text-4xl">
              Trusted by over 300+ clients
            </h3>
            <p>
              We bring solutions to make life easier for our customers.
            </p>
          </div>
          <div className="w-full max-w-full py-10 lg:w-2/3 lg:flex-none lg:px-8 lg:py-0">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                "https://www.thestreet.com/.image/t_share/MjAxNDQ4NzE2MTczODQ2MDY5/spacex_lead_db_101223.jpg",
                "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS_Hy9BCdFCV5AUrytEqNqgEtPZnk41chOQ&s",
                "https://www.thestreet.com/.image/t_share/MjAxNDQ4NzE2MTczODQ2MDY5/spacex_lead_db_101223.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS_Hy9BCdFCV5AUrytEqNqgEtPZnk41chOQ&s",
                "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
                "https://www.thestreet.com/.image/t_share/MjAxNDQ4NzE2MTczODQ2MDY5/spacex_lead_db_101223.jpg",
                "https://www.thestreet.com/.image/t_share/MjAxNDQ4NzE2MTczODQ2MDY5/spacex_lead_db_101223.jpg",
              ].map((imgSrc, index) => (
                <div key={index} className="relative w-32 rounded-lg border-2 border-transparent overflow-hidden before:absolute before:inset-0 before:m-[-2px] before:animate-borderLight before:rounded-lg">
                  <img src={imgSrc} alt="Client Logo" className="w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
