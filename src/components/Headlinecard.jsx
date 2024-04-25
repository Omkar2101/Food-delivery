// import React from 'react'
// import Cardshome from './Cardshome'

// function Headlinecard() {
//   return (
//     <>
//     <div className='flex justify-start items-center  '>
//       <Cardshome info={"Safari Veg"} address={"Viman Nagar"}
//           img={"https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"}>
//       </Cardshome>
//       <Cardshome info={"Elite Restro and Bar"} address={"Magarpatta"}
//           img={"https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"}>
//       </Cardshome>
//       <Cardshome info={"KFC"} address={"Magarpatta"}
//           img={"https://images.unsplash.com/photo-1621114957135-7f88c8447439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S0ZDfGVufDB8fDB8fHww"}>
//       </Cardshome>
           


//     </div>
    
//     </>
//   )
// }

// export default Headlinecard

import React from 'react';
import Cardshome from './Cardshome';

function Headlinecard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Cardshome
          info={"Safari Veg"}
          address={"Viman Nagar"}
          img={"https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"}
        />
        <Cardshome
          info={"Elite Restro and Bar"}
          address={"Magarpatta"}
          img={"https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"}
        />
        <Cardshome
          info={"KFC"}
          address={"Magarpatta"}
          img={"https://images.unsplash.com/photo-1621114957135-7f88c8447439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S0ZDfGVufDB8fDB8fHww"}
        />
      </div>
    </div>
  );
}

export default Headlinecard;

