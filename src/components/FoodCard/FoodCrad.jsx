

const FoodCrad = ({item}) => {
    const { image, name, price, recipe } = item;
    return (
        <div>
            <div className="card   bg-base-100 shadow-xl">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-6 mt-4 p-2 px-4">${price}</p>
                <div className="card-body text-center flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCrad;