import React, { Fragment } from "react";
import Ellipse from './Ellipse.png'



const Project = () => {
    return (
        <Fragment>
            <div className="flex flex-col space-y-4 mt-10 md:flex-row">

                <div className="bg-[#3551D8]">
                    <h1 className="text-center mx-10 py-10 text-[#ffffff]  text-2xl  md:font-bold md:mx-20 md:py-60 md:text-4xl">Testimonies & Recommendations</h1>
                </div>

                <div className="flex flex-row  px-10  md:flex-col text-xs md:py-24 ">

                    <div className="flex flex-col text-center md:flex-row  ">
                        <div className=" p-8 ">
                            <img className="mx-auto md:mx-auto" src={Ellipse} alt="" />
                            <h1>Femi Okaseun</h1>
                            <p className=" ">Seyi gets things done. He’s
                                very passionate about what he does and he’s always
                                fun to be with.</p>
                        </div>

                        <div className="p-8  ">
                            <img className="mx-auto md:mx-auto" src={Ellipse} alt="" />
                            <h1>Femi Okaseun</h1>
                            <p className="">Seyi gets things done. He’s
                                very passionate about what he does and he’s always
                                fun to be with.</p>
                        </div>
                    </div>

                    <div className="flex flex-col  text-center  md:flex-row  ">
                        <div className="p-8 ">
                            <img className="mx-auto md:mx-auto" src={Ellipse} alt="" />
                            <h1>Femi Okaseun</h1>
                            <p className="">Seyi gets things done. He’s
                                very passionate about what he does and he’s always
                                fun to be with.</p>
                        </div>
                        <div className=" p-8 ">
                            <img className="mx-auto md:mx-auto" src={Ellipse} alt="" />
                            <h1>Femi Okaseun</h1>
                            <p className="">Seyi gets things done. He’s
                                very passionate about what he does and he’s always
                                fun to be with.</p>
                        </div>
                    </div>
                </div>






            </div>
        </Fragment>
    );
}

export default Project;