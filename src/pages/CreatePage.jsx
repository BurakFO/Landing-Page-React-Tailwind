import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import CreateInput from "../components/CreateInput/CreateInput";

const CreatePage = () => {


    return (
        <>
            <div className="grid grid-cols-6 lg:grid-cols-8 gap-9 mt-4 m-4">
                {/* Edit Section */}
                <div className="col-span-2 mx-4">
                    <CreateInput />
                </div>

                {/* Landing Page Section */}
                <div className="col-span-4">
                    <Navbar />
                    <Hero />
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

    )
}

export default CreatePage;