import { useDispatch } from "react-redux";
import { selectCompanyName, setCompanyName } from "../redux/companyNameSlice";
import { selectBanner, setBanner, setBannerDetail, setBannerBackgroundColor } from "../redux/bannerSlice";

const useFormHandlers = () => {

    const dispatch = useDispatch();

    const handleChange = (setter, e) =>{
        dispatch (setter(e.target.value));
    };

    return{
        handleChangeCompanyName: (e) => handleChange(setCompanyName, e),
        handleBannerChange: (e) => handleChange(setBanner, e),
        handleBannerDetailChange: (e) => handleChange(setBannerDetail, e),
        handleChangeBackgroundColor: (e) => handleChange(setBannerBackgroundColor, e)
    }
        
    
};

export default useFormHandlers;