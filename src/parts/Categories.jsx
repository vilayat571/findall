import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from '../components/Brands/Title';
import Categorycart from '../components/Categories/Categorycart';
import { fetchCategories } from '../redux/reducers/getCategoriesReducer';
import { Link } from 'react-router-dom';

function Categories() {

    const categories = useSelector((state) => state.getCategoriesReducer.categories);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchCategories());
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
    <div className='w-full h-auto flex justify-center items-start '>
    <div className='w-11/12 flex flex-col'>

      <Title text={"Famous categories"} />

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
            categories.length > 0 ? categories.map((product, index) => {
              return (
                <Link key={index} to={`/categories/${product}`} >
                <Categorycart key={index} product={product} />
                </Link>
              )
            }) : 'Loading'
          }
        </Carousel>
      </div>


    </div>
  </div>
  )
}

export default Categories
