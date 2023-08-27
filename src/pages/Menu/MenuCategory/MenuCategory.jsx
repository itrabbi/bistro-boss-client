
import { Link } from "react-router-dom";
import Cover from "../../Home/Home/Shared/Cover/Cover";
import MenuItem from "../../Home/Home/Shared/MenuItem/MenuItem";

const MenuCategory = ({items,title ,img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
              <div className="grid md:grid-cols-2 mt-16 gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="mt-4 cs-btn">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;