import chefService from "../../assets/home/chef-service.jpg";

const CategoryName = ({heading, description}) => {
    return (
        <div style={{
            backgroundImage: `url(${chefService})`
        }} className="hero">
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center ">
                <div className="w-full h-full m-20 bg-black bg-opacity-40 text-white p-12">
                    <h1 className="mb-5 text-3xl font-bold uppercase">{heading}</h1>
                    <p className="mb-5">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryName;