import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCompanyName, setCompanyName } from "../../redux/companyNameSlice";
import { selectBanner, setBanner } from "../../redux/bannerSlice";

const CreateInput = ({ inputRef, bannerRef }) => {

    const dispatch = useDispatch();
    const { companyName } = useSelector(selectCompanyName);

    const handleChange = (e) => {
        dispatch(setCompanyName(e.target.value));
    };
    const handleBannerChange = (e) =>{
        dispatch(setBanner(e.target.value));
    };

    return (
        <div>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Company Name</label>
                    <input type="text" className="w-full mt-2 p-2 border rounded"
                        ref={inputRef}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Banner Name</label>
                    <input type="text" className="w-full mt-2 p-2 border rounded"
                        ref={bannerRef} 
                        onChange={handleBannerChange}/>
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

export default CreateInput