import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Home/Shared/Cover/Cover";
import conatctImg from "../../../assets/contact/banner.jpg";
import Location from "../Location/Location";
import ContactFrom from "../ContactFrom/ContactFrom";
 

const Contact = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>

            <Cover img={conatctImg} title="CONTACT US" ></Cover>

            {/*our Locaton  */}
            <Location></Location>

            {/* Contact From */}
            <ContactFrom></ContactFrom>
            

        </div>
    );
};

export default Contact;