import React, { Fragment } from "react";
const Milestone = () => {
    return (
        <Fragment>
            <div className="mx-20 space-y-5 pt-20">
                <div className=" text-center md:text-left space-y-2">
                    <h1 className=" text-3xl md:text-4xl font-bold">Milestones of Projects</h1>
                    <p className="text-sm">Here are a few  people & projects i’ve patnered and worked on.</p>
                </div>


                <div className="grid grid-cols-1 grid-flow-row-dense text-[#ffffff] md:grid-cols-3 gap-2 ">

                    <div className="bg-[#3551D8] row-span-2 h-80 p-4">
                        <h1>Project Title 1</h1>
                        <p>Android, IoT</p>
                    </div>

                    <div className="bg-[#6FC399] col-span-2 p-4">
                        <h1>Co-Founder @ZURI Internship 2</h1>
                        <p>Web, PHP, Python</p>
                    </div>

                    <div className="bg-[#0F1841] h-68 p-4" >
                        <h1>PCo-Fouder HNG internship 3</h1>
                       
                    </div>

                    <div className="bg-[#3551D8] row-span-5 p-4 p-4">
                        <h1>Project Title 4</h1>
                        <p>Android, IoT</p>
                    </div>

                    <div className="bg-[#3551D8] col-span-2 row-span-5 p-4">
                        <h1>Project Title 5</h1>
                        <p>Android, IoT</p>
                    </div>

                    <div className="bg-[#3551D8] p-4">
                        <h1>Project Title 6</h1>
                        <p>Android, IoT</p>
                    </div>

                </div>




            </div>
        </Fragment>
    );
}

export default Milestone;