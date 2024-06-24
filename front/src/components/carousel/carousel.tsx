import { Carousel } from "flowbite-react";

const MyCarousel = () => {
  return (
    <div style={{height: '28rem'}}>
      <Carousel>
        <img className="w-full h-full object-cover object-center" src="/carousel1.png" alt="..." />
        <img className="w-full h-full object-cover object-center" src="/carousel2.png" alt="..." />
        <img className="w-full h-full object-cover object-center" src="/carousel3.png" alt="..." />
        <img className="w-full h-full object-cover object-center" src="/carousel4.png" alt="..." />
      </Carousel>
    </div>
  );
}



export default MyCarousel;



