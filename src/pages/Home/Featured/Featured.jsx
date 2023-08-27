import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item  bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="cheack it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 " >
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias, officiis ab id facere atque illo exercitationem iste suscipit quibusdam ipsum consequatur, aspernatur nisi hic, iure tempore minima fuga. Consequuntur corrupti error quibusdam eveniet possimus ut itaque natus iste animi recusandae, nam nisi dignissimos magnam aliquam quam explicabo, pariatur earum!</p>
                    <button className="mt-4 cs-btn">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;