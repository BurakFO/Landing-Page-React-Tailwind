import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCompanyName, setCompanyName } from "../../redux/companyNameSlice";

const CreateInput = () => {

    const dispatch = useDispatch();
    const { companyName } = useSelector(selectCompanyName);

    const handleChange = (e) => {
        dispatch(setCompanyName(e.target.value));
    };

    return (
        <div>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Company Name</label>
                    <input type="text" className="w-full mt-2 p-2 border rounded"
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full mt-2 p-2 border rounded" />
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