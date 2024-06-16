import React, { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import CreateInput from "../components/CreateInput/CreateInput";

const CreatePage = () => {

    const refs = {
        companyNameInput: useRef(null),
        bannerInput: useRef(null),
        bannerDetailInput: useRef(null)
    };

    const handleClick = ({ inputName }) => {
        console.log({ inputName }); //object
        console.log([inputName]); //array
        console.log(inputName); //string


        if (refs[inputName]) {
            refs[inputName].current.focus();
            console.log(`you reached the ${inputName} input`);
        } else {
            console.log(`input ${inputName} does not exist`);
        }
    };

    return (
        <>
            <div className="grid grid-cols-6 lg:grid-cols-8 gap-9 mt-4 m-4">
                {/* Edit Section */}
                <div className="col-span-2 mx-4 bg-gray-200">
                    <h1 className="flex text-lg text-center font-bold items-center justify-center my-5">You can Edit the Landing Page HERE!</h1>
                    <CreateInput inputRefs={refs} />
                </div>

                {/* Landing Page Section */}
                <div className="col-span-4 border-4 border-red-500">
                    <Navbar onClickCompanyName={() => handleClick({ inputName: 'companyNameInput' })} />
                    <Hero
                        onClickBanner={() => handleClick({ inputName: 'bannerInput' })}
                        onClickBannerDetail={() => handleClick({ inputName: 'bannerDetailInput' })}
                    />
                    <Services />
                    <About />
                    <Contact />
                    <Footer />
                </div>

                <div className="col-span-2 hidden lg:col-span-2">
                    hello
                </div>
            </div>
        </>
    );
};

export default CreatePage;
