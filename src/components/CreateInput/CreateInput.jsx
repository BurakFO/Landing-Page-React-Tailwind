import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCompanyName, setCompanyName } from "../../redux/companyNameSlice";
import { selectBanner, setBanner, setBannerDetail, setBannerBackgroundColor } from "../../redux/bannerSlice";
import { useState } from "react";

const CreateInput = ({ inputRefs }) => {

    const dispatch = useDispatch();
    const { banner } = useSelector(selectBanner);
    const { bannerDetail } = useSelector(selectBanner);
    const { bannerBackgroundColor } = useSelector(selectBanner);

    const handleChange = (e) => {
        dispatch(setCompanyName(e.target.value));
    };

    const handleBannerChange = (e) => {
        dispatch(setBanner(e.target.value));
    };

    const handleBannerDetailChange = (e) => {
        dispatch(setBannerDetail(e.target.value));
    };

    const handleChangeBackgroundColor = (e) => {
        dispatch(setBannerBackgroundColor(e.target.value));
    };


    return (
        <div>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Company Name</label>
                    <input
                        type="text"
                        className="w-full mt-2 p-2 border rounded"
                        ref={inputRefs.companyNameInput}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Banner Name</label>
                    <input
                        type="text"
                        className="w-full mt-2 p-2 border rounded"
                        ref={inputRefs.bannerInput}
                        onChange={handleBannerChange}
                    />
                    <label className="block text-gray-700">Banner Detail</label>
                    <input
                        type="text"
                        className="w-full mt-2 p-2 border rounded"
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
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Mesajınız</label>
                    <textarea className="w-full mt-2 p-2 border rounded" rows="4"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Gönder</button>
            </form>
        </div>
    );
};

export default CreateInput;
