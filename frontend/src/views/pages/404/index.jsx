import { Link } from "react-router-dom";
import { Images } from "config/images";
import AuthLayout from "views/layouts/Auth/AuthLayout";

const { authBrandLogo } = Images;
const Page404 = () => {
    const component404 = () => (            
        <div className="text-center min-h-[80vh] flex justify-center flex-column" style={{flexDirection:'column'}}>    
            <div className="flex w-full justify-center mb-10">
            <img src={authBrandLogo.default} />
            </div>
            <h1 className="text-black font-openSans_bold lg:text-[38px] mb-0 md:text-[36px] sm:text-[38px] text-[37px]">Opps! Page not found.</h1>
            <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px] text-c_949494 font-openSans_regular mb-0">We're sorry, but it seems that the page you are trying to access cannot be found at the provided URL.</p>
            <div className="w-full mt-10">
                <Link to="/" className="px-10 py-3 inline-block lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] text-white bg-[#FD6769] rounded-full font-openSans_bold text-center hover:brightness-110 cursor-pointer">
                    Home
                </Link>
            </div>
        </div>
    );

    return (

        <AuthLayout className="" hasLogo={false}>
            {component404()}
        </AuthLayout>
    )
}
export default Page404;