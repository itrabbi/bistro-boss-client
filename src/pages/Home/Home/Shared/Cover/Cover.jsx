import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className="hero h-[700px] text-white">
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center bg-black w-[75%] h-[60%] bg-opacity-40">
                        <div className="">
                            <h1 className=" mb-5 text-3xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{ }</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;