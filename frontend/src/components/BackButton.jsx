
// import { BsArrowLeft } from "react-icons/bs"
// import { Link } from "react-router-dom"

// const BackButton = ({ destination ='/'}) => {
//   return (
//     <div className="flex">
//         <Link
//         to={destination}
//         className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
//         >
//         <BsArrowLeft className="text-2xl"/>

//         </Link>

//     </div>
//   )
// }

// export default BackButton


import PropTypes from 'prop-types';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex">
      <Link to={destination} className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit">
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  destination: PropTypes.string, // Adjust the prop type accordingly
};

export default BackButton;
