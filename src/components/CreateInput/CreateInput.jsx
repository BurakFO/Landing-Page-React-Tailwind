import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCompanyName, setCompanyName } from "../../redux/companyNameSlice";
import { selectBanner, setBanner, setBannerDetail, setBannerBackgroundColor } from "../../redux/bannerSlice";
import { useState } from "react";
import useFormHandlers from "../../hooks/useFormHandlers";

const CreateInput = ({ inputRefs }) => {


    const { bannerBackgroundColor } = useSelector(selectBanner);
    const { bannerTextColor } = useSelector(selectBanner);


    // onChanges connected with the hook 
    const {
        handleChangeCompanyName,
        handleBannerChange,
        handleBannerDetailChange,
        handleChangeBackgroundColor,
        handleBannerTextColor,
        handleServicesTitle

    } = useFormHandlers();


    return (
        <div>
            <form>
                {/* Compay Name Section */}
                <div className="mb-4">
                    <label className="block text-gray-700">Company Name</label>
                    <input
                        type="text"
                        className="w-full mt-2 p-2 border rounded"
                        ref={inputRefs.companyNameInput}
                        onChange={handleChangeCompanyName}
                    />
                </div>

                {/* Baner Section */}
                <div className="mb-4">
                    <label className="block text-gray-700">Banner Name</label>
                    <input
                        type="text"
                        className="w-full mt-2 p-2 border rounded"
                        ref={inputRefs.bannerInput}
                        onChange={handleBannerChange}
                    />

                    <div className="flex justify-end mb-4">
                        <label htmlFor="colorPicker" className="flex items-center  text-gray-700 text-sm font-bold">
                            Banner Yazi rengi:
                        </label>
                        <input
                            type="color"
                            id="colorPicker"
                            value={bannerTextColor}
                            onChange={handleBannerTextColor}
                            className="w-10 h-10 p-0"
                        />
                    </div>

                    <label className="block text-gray-700">Banner Detail</label>
                    <input
                        type="text"
                        className="w-full mt-2 p-2 border rounded"
                        ref={inputRefs.bannerDetailInput}
                        onChange={handleBannerDetailChange}
                    />

                    <div className="mb-4">
                        <label htmlFor="colorPicker" className="block text-gray-700 text-sm font-bold mb-2">
                            Arkaplan Rengini Seç:
                        </label>
                        <input
                            type="color"
                            id="colorPicker"
                            value={bannerBackgroundColor}
                            onChange={handleChangeBackgroundColor}
                            className="w-20 h-10 p-0 border-none"
                        />
                    </div>

                    <label className="block text-gray-700">Services Title:</label>
                    <input
                        type="text"
                        className="w-full mt-2 p-2 border rounded"
                        onChange={handleServicesTitle}
                    />


                    <div>
                        <label className="block text-gray-700">Cart Title 1:</label>
                        <input
                            type="text"
                            className="w-full mt-2 p-2 border rounded"
                        />

                        <label className="block text-gray-700">Card Description 1:</label>
                        <input
                            type="text"
                            className="w-full mt-2 p-2 border rounded"
                            onChange={handleBannerDetailChange}
                        />

                    </div>
                </div>

                {/* Create Button  */}
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded"
                    onClick={() => alert('Henuz sayfani olusturamiyoruz, cok yakinda bu ozellik sizlerle!!')}>Olustur !!</button>

            </form>
        </div>
    );
};

export default CreateInput;
