import React, { Fragment } from "react";
import Linkdin from './Linkdin.png'
import tweeter from './tweeter.png'
import php from './php.png'
import line from './line.png'
import python from './python.png'
import js from './js.png'
import wordpress from './wordpress.png'
import windows from './windows.png'
import html from './html5.png'

const AboutMe = () => {
    return (
        <Fragment>
            {/* AboutMe */}

            <div className="flex flex-col text-center p-5 pt-20 md:flex-col ">

                <h1 className="p-3 font-bold text-2xl">About Me</h1>
                <p className="md:w-1/3 mx-auto">Odikeme Fun-ebi Cletus is a passionate and goal driven
                    Techpreneur whose interest is in using technogy to
                    build solutions to solve real world problems
                </p>
                <div className="flex flex-row mx-auto    md:flex-row space-x-4 pt-3">
                    <a href="#"> <img className="" src={Linkdin} alt="Linkdin" /></a>
                    <a href="#"> <img src={tweeter} alt="tweeter" /></a>
                </div>
            </div>


            {/* MY SKILL SECTION */}

            <div className="flex flex-col md:flex-col mx-20">
                <div className="pb-10 space-y-6">
                    <h1 className="text-4xl font-bold">My Skills</h1>
                    <p>Here are a few skills i possess</p>
                </div>


                {/* MYSKILLS SETUP 1 */}
                <div className="flex flex-col md:flex-row justify-between space-y-5">
                    <div className="flex flex-row md:flex-row">
                        <div className=" pr-4 pt-4">
                            <img src={php} alt="" />
                        </div>
                        <div className="leading-10" >
                            <h2>PHP</h2>
                            <img src={line} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-row md:flex-row">
                        <div className=" pr-4 pt-4">
                            <img src={python} alt="" />
                        </div>
                        <div className="leading-10" >
                            <h2>Python</h2>
                            <img src={line} alt="" />
                        </div>
                    </div>
                </div>


                {/* MYSKILL SETUP 2 */}
                <div className="flex flex-col md:flex-row justify-between space-y-5">
                    <div className="flex flex-row md:flex-row">
                        <div className=" pr-4 pt-4">
                            <img src={js} alt="" />
                        </div>
                        <div className="leading-10" >
                            <h2>Javascript</h2>
                            <img src={line} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-row">
                        <div className=" pr-4 pt-4">
                            <img src={wordpress} alt="" />
                        </div>
                        <div className="leading-10" >
                            <h2>Wordpress</h2>
                            <img src={line} alt="" />
                        </div>
                    </div>
                </div>

                {/* MYSKILLS SETUP 3 */}
                <div className="flex flex-col md:flex-row justify-between space-y-5">
                    <div className="flex flex-row md:flex-row">
                        <div className=" pr-4 pt-4">
                            <img src={windows} alt="" />
                        </div>
                        <div className="leading-10" >
                            <h2>Microsoft Office</h2>
                            <img src={line} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-row">
                        <div className=" pr-4 pt-4">
                            <img src={html} alt="" />
                        </div>
                        <div className="leading-10" >
                            <h2>HTML</h2>
                            <img src={line} alt="" />
                        </div>
                    </div>
                </div>


            </div>

        </Fragment>
    );
}

export default AboutMe;