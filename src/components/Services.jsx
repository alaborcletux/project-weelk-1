import React, { Fragment } from "react";
import presentation from './presentation.png'
import server from './server.png'
import checklist from './checklist.png'
import cloud from './cloud.png'
import notes from './notes.png'
import seo from './seo.png'
import consultation from './consultation.png'
import responsive from './responsive.png'

const Services = () => {
    return (
        <Fragment>
            {/* // OVERALL DIV */}
            <div className="mx-20 pt-20 md:justify-between space-y-10">
                {/* SERVICES RENDER */}
                <div className=" flex flex-col text-center py-5 md:w-1/3 md:text-left ">
                    <h1 className="text-4xl my-4 font-medium">Services I Render.</h1>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis fugiat illum explicabo mollitia numquam?.</p>
                </div>


                {/* SERVICE ICONS */}

                <div className="text-center md:text-left ">

                    {/* SERVICE SETUP 1 */}
                    <div className="flex flex-col  md:flex-row justify-between">

                        <div className="md:w-1/4 space-y-4 mb-5 ">
                            <img className="mx-auto md:mx-0" src={presentation} alt="" />
                            <h2 className="font-bold text-xl font-mono">Training</h2>
                            <p className="text-sm">I offer instructor-led training in a way that fits
                                with the way you work.</p>
                        </div>


                        <div className="md:w-1/3 space-y-4 mb-5 ">
                            <img className="mx-auto md:mx-0" src={consultation} alt="" />
                            <h2 className="font-bold text-xl font-mono">IT Consulting.</h2>
                            <p className="text-sm">I offer Information technology consulting as a field of activity
                                focused on advising organizations on how best to use information
                                technology in achieving their business objectives..</p>
                        </div>


                        <div className="md:w-1/4 space-y-4 mb-5 ">
                            <img className="mx-auto md:mx-0" src={responsive} alt="" />
                            <h2 className="font-bold text-xl font-mono">Responsive Web Design</h2>
                            <p className="text-sm">I Help design Mobile-friendly, worldclass websites
                                that helps scales your bussiness
                                and helps user experience get better..</p>
                        </div>
                    </div>




                    {/* SERVICE SETUP 2 */}
                    <div className="flex flex-col md:flex-row justify-between ">
                        <div className="md:w-1/4 space-y-4 mb-5 ">
                            <img className="mx-auto md:mx-0" src={server} alt="" />
                            <h2 className="font-bold text-xl font-mono">Database Development</h2>
                            <p className="text-sm">With equipped skills of developing and maintaining databases i could
                                help develop scalable and optimized databases for your organization..</p>
                        </div>

                        <div className="md:w-1/3 space-y-4 mb-5 ">
                            <img className="mx-auto md:mx-0" src={presentation} alt="" />
                            <h2 className="font-bold text-xl font-mono">Customer Software Development.</h2>
                            <p className="text-sm">I help develop technical solutions in form of
                                softwares that answer to the needs of customer’s problems.</p>
                        </div>

                        <div className="md:w-1/4 space-y-4 mb-5 ">
                            <img className="mx-auto md:mx-0" src={checklist} alt="" />
                            <h2 className="font-bold text-xl font-mono">Software Testing</h2>
                            <p className="text-sm">I help test softwares ready for production to fish out bugs and
                                give advice on how to make it scalable, usable and enterprise-friendly. .</p>
                        </div>
                    </div>


                    {/* SERVICES SETUP 3 */}

                    <div className="flex flex-col md:flex-row justify-between ">
                        <div className="md:w-1/4 space-y-4 mb-5 ">
                            <img className="mx-auto md:mx-0" src={cloud} alt="" />
                            <h2 className="font-bold text-xl font-mono">Saas Development</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras nec ollicitudin tellus.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Cras nec sollicitudin tellus.</p>
                        </div>
                        <div className="md:w-1/3 space-y-4 mb-5 ">
                            <img className="mx-auto md:mx-0" src={notes} alt="" />
                            <h2 className="font-bold text-xl font-mono">Technical Writing.</h2>
                            <p className="text-sm">I help channel and transfer information between two or
                                more parties, through any medium that best facilitates the transfer
                                and comprehension of the information.</p>
                        </div>
                        <div className="md:w-1/4 space-y-4 mb-5 ">
                            <img className="mx-auto md:mx-0" src={seo} alt="" />
                            <h2 className="font-bold text-xl font-mono">Web Development</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Cras nec sollicitudin tellus.</p>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default Services;