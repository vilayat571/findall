import React from 'react';
import Ptag from './Ptag';

function Contexttags() {
    return (
        <>
            <Ptag text={`Hello, we are the new online shopping company in the world.`} />
            <Ptag text={`Our goal is to become the country's leading e-commerce company by working with well-known brands, developing customer satisfaction, and implementing successful sales and delivery operations. We are energetic and we believe that we have a future!`} />
            <Ptag text={`Honestly, Findall. combines the concept of shopping mall and market under one roof. That is, you can buy the same product at a higher price in the shopping center and at a lower price in the traditional market. And we offer you the deepest assortment, the most favorable conditions and the most suitable service. Plus with a 21-day return option and a guarantee that stands by our word.`} />
            <Ptag text={`More than 25,000 product range, such as phones, smartphones, gadgets, laptops, computers, TVs, home theaters, small and large appliances, air conditioners, game consoles, bicycles and sigways, as well as textiles, tableware, furniture, home decor with Findall. - is a one-stop shop for all your needs.`} />
            <Ptag text={`Gone are the days when we had to go to different stores and even different markets to buy our favorite products at reasonable prices. Because it is now possible to buy everything online at incredibly discounted prices.`} />
            <Ptag text={`Here you can choose electronics products from Samsung, LG, Lenovo, Bosch, HP, Apple, JBL, Panasonic, Philips, Xiaomi, Tefal and many other trusted brands. Browse through our sales collection right now and view, rate and order the products you like wherever you want.`} />
            <Ptag text={`As your trusted online shopping partner, we provide services like door-to-door delivery, fast cashback, cash on delivery and easy and secure payment options.`} />
            <Ptag text={`When you buy from Findall, you can be sure that you will get the highest quality product because we carry out strict quality checks. Also, we offer you structured categories and products of only official brands. We do our best to ensure that the products reach you in the best possible condition.`} />
            <Ptag text={`In short, if you are satisfied with everything, tell your loved ones, otherwise, let us know. Dont worry if the product we deliver is not to your liking. Thanks to our easy return policy, you can easily send back the products you bought.`} />
        </>
    )
}

export default React.memo(Contexttags);
