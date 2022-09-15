import { Fragment } from "react";
import Linkdin from './Linkdin.png'
import tweeter from './tweeter.png'
import fill from './Fill.png'
import Combeine from './Combine.png'
import envelope from './envelope.png'

const ContactMe = () => {
    return (
        <Fragment>
            <div className="flex flex-col justify-between md:flex-row">
                <div className="flex flex-col px-20 py-10 md:px-28 md:py-48 ">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold pb-3">Get In Touch.</h1>
                        <p className=" md:w-1/2">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Cras nec sollicitudin tellus.
                            Phasellus ac nisi augue.</p>
                    </div>
                    <div className="flex flex-row space-x-2 py-6 mx-auto md:mx-0">
                        <img src={Linkdin} alt="" />
                        <img src={tweeter} alt="" />
                        <h3 className="pt-3">- Xyluz</h3>
                    </div>

                    <div className="space-y-8 mx-auto md:mx-0">
                        <div className="flex flex:col   space-x-4 md:flex-row ">
                            <div>
                                <img src={Combeine} alt="" />
                            </div>
                            <div>
                                <h4 className="text-1sm">seyionifade@gmail.com</h4>
                                <h5 className="text-xs text-[#a9a9a8] ">Send a message Anytime!</h5>
                            </div>
                        </div>

                        <div className="flex flex:col  space-x-4">
                            <div>
                                <img src={fill} alt="" />
                            </div>
                            <div>
                                <h4 className="text-1sm">+234 - 1245 - 13966</h4>
                                <h5 className="text-xs text-[#a9a9a8]">Send a message Anytime!</h5>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="bg-[#3551D8] ">
                    <div className=" p-20 text-[#ffffff]">

                        <div className="pb-10">
                            <h1 className="pb-4 text-3xl font-bold text-[#a9a9a9]">Need a Service? </h1>
                            <h1 className="text-4xl font-extrabold">Send A Message</h1>
                        </div>


                        <form className="flex flex-col  md:flex-col  text-left " action="">
                            <label className="pb-4" htmlFor="">Enter Fullname</label>
                            <input className=" md:w-96 bg-[#3551D8] outline outline-white-500 focus:outline-none" type="text" name="name" />

                            <label className="py-4" htmlFor="">Enter Email Address</label>
                            <input className="bg-[#3551D8] outline" type="Email" name="Email" />

                            <label className="py-4" htmlFor="">Write Message</label>
                            <textarea className="  bg-[#3551D8] outline" name="Message"></textarea>
                        </form>

                        <div className="py-10">
                            <button class="text-[#3551D8] bg-[#ffffff] p-4 rounded-lg px-6">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-[#0A102B] text-[#ffffff]">
                <div className=" py-16 mx-auto text-center justify-center">
                    <h1 className="text-4xl font-bold">Odikeme Fun-ebi</h1>
                    

                    <div className="flex flex-row space-x-4 py-8 mx-auto md:mx-0 px-[36%]  md:px-[46%] ">
                        <img src={Linkdin} alt="" />
                        <img src={tweeter} alt="" />
                        <img src={envelope} alt="" />
                    </div>

                    <h4>Copyright@ 2021 | All rights Reserved</h4>

                </div>
            </footer>
        </Fragment>
    );
}

export default ContactMe;