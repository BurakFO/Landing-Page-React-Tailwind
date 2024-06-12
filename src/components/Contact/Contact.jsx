import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectCompanyName, setCompanyName } from "../../redux/companyNameSlice";

const Contact = () => {
    const dispatch = useDispatch();
    const { companyName } = useSelector(selectCompanyName);

    const handleChange = (e) => {
        dispatch(setCompanyName(e.target.value));
    };


    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">İletişim</h2>
                <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
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
            </div>
            <div>
                <p>
                    {companyName}
                </p>
            </div>
        </section>
    );
}

export default Contact;
