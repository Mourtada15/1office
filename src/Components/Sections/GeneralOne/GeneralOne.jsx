import Carousell from '../../Carousel/Carousel';
import './GeneralOne.css';

const GeneralOne = () => {
  return (
    <div id='about' className="general-one-wrapper">
      <div className='d-flex flex-column gap-4' style={{ width: "40%" }}>
        <h1>Discover Your Productive Hub</h1>
        <ul className='d-flex flex-column gap-4' style={{ fontSize: "x-large", /* textAlign: "Justify" */ }}>
          <li>At One Office, we provide everything you need to start, develop, and grow your business without ever leaving your desk</li>
          <li>Enjoy the convenience of all-inclusive amenities, eliminating the hassle of overhead costs</li>
          <li>Experience a productive work environment tailored to your needs</li>
        </ul>
      </div>
      {/* <div style={{ width: "60%", backgroundColor: "blue" }}> */}
      <div style={{ width: "60%" }}>
        <Carousell />
      </div>
    </div>
  );
}

export default GeneralOne;
