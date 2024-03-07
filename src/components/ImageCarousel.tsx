import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true
  };
  return (
    <div className="sm:w-1/2 xs:w-full  sm:h-full  xs:h-1/2 rounded-md shadow-md flex items-center justify-center p-4">
      <Slider {...settings} className="w-full h-full">
        {images.length > 0 &&
          images.map((image, index) => {
            return (
              <img
                src={image}
                alt="CourseImg"
                key={index}
              />
            );
          })}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
