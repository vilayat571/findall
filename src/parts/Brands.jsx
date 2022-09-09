import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Brandcart from '../components/Brands/Brandcart';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from '../components/Brands/Title';
import { fetchBrands } from '../redux/reducers/getBrandsReducer';


function Brands() {

  const products = useSelector((state) => state.getBrandsReducer.brands);
  console.log(products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands(18));
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 3
    }
  };


  return (
    <div className='w-full h-auto flex justify-center items-start mb-4'>
      <div className='w-11/12 flex flex-col'>

        <Title text={"Famous brands"} />

        <div className=' w-full overflow-auto'>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .3"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            itemAriaLabel='r'
            responsive={responsive}
          >
            {
              products.length > 0 ? products.map((product, index) => {
                return (
                  <Brandcart key={index} product={product} />
                )
              }) : 'Loading'
            }
          </Carousel>
        </div>


      </div>
    </div>
  )
}

export default Brands;
