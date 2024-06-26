import { useDispatch } from "react-redux";
import { selectCompanyName, setCompanyName } from "../redux/companyNameSlice";
import { selectBanner, setBanner, setBannerDetail, setBannerBackgroundColor, setBannerTextColor } from "../redux/bannerSlice";
import { setServicesTitle } from "../redux/servicesSlice";

const useFormHandlers = () => {

    const dispatch = useDispatch();

    const handleChange = (setter, e) => {
        dispatch(setter(e.target.value));
    };

    return {
        handleChangeCompanyName: (e) => handleChange(setCompanyName, e),
        handleBannerChange: (e) => handleChange(setBanner, e),
        handleBannerDetailChange: (e) => handleChange(setBannerDetail, e),
        handleChangeBackgroundColor: (e) => handleChange(setBannerBackgroundColor, e),
        handleBannerTextColor: (e) => handleChange(setBannerTextColor, e),
        handleServicesTitle: (e) => handleChange(setServicesTitle, e)
    }


};

export default useFormHandlers;