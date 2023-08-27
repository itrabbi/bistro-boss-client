import { FaPhoneVolume } from "react-icons/fa6";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Location = () => {
    return (
        <div>
            <SectionTitle
                subHeading="Visit Us"
                heading="OUR LOCATION"
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="text-center">
                    <div className="bg-[#D1A054] py-[25px]">
                        <FaPhoneVolume className="mx-auto text-white text-2xl "></FaPhoneVolume>
                    </div>
                    <div className=" border-2">
                        <div className="bg-[#D9D9D9] mx-[30px] mb-[30px] pt-[40px] pb-[90px]">
                            <h2 className="text-2xl mb-2">PHONE</h2>
                            <p>+38 012 34 56 789</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="bg-[#D1A054] py-[25px]">
                        <FaPhoneVolume className="mx-auto text-white text-2xl "></FaPhoneVolume>
                    </div>
                    <div className=" border-2">
                        <div className="bg-[#D9D9D9] mx-[30px] mb-[30px] pt-[40px] pb-[90px]">
                            <h2 className="text-2xl mb-2">PHONE</h2>
                            <p>+38 012 34 56 789</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="bg-[#D1A054] py-[25px]">
                        <FaPhoneVolume className="mx-auto text-white text-2xl "></FaPhoneVolume>
                    </div>
                    <div className=" border-2">
                        <div className="bg-[#D9D9D9] mx-[30px] mb-[30px] pt-[40px] pb-[90px]">
                            <h2 className="text-2xl mb-2">PHONE</h2>
                            <p>+38 012 34 56 789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;