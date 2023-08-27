import FoodCrad from "../../../components/FoodCard/FoodCrad";


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-flow-row lg:grid-cols-3  md:grid-cols-2 gap-10">
            {
                items.map(item => <FoodCrad
                    key={item._id}
                    item={item}
                ></FoodCrad>)
            }
        </div>
    );
};

export default OrderTab;