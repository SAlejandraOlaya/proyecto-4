
import { INewProduct } from '@/Interfaces/INewProduct';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


interface CarouselProps {
    items: INewProduct[];
}

const NewProductsCarousel: React.FC<CarouselProps> = ({ items }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        spaceBetween: 20,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,

    };

    return (
        <div className="container mx-auto px-4 mb-10">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index}>
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
                            <a href="#">
                                <img className="carousel-image" src={item.image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <div className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</div>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{ height: "50px" }}>{item.description}</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Ver
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};



// Custom arrow components
const CustomPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }}>
            <div
                className="custom-arrow custom-prev-arrow"

                onClick={onClick}
            >
                <FaChevronLeft />
            </div>
        </div>
    );
};

const CustomNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }}>
            <div
                className="custom-arrow custom-next-arrow"

                onClick={onClick}
            >
                <FaChevronRight />
            </div>
        </div>
    );
};

export default NewProductsCarousel;