import { Images } from "config/images";
import { Helmet } from "react-helmet";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import GuestMiddleware from "../../../middleware/guestMiddleware";
import { siteTitle } from "../../../shared/helper";
const { brandLogo, homeBackgroundImage } = Images;
const owlArray = [
  {
    id: "1",
    title: ["Meet People From All", <br />, "Walks Of Life"],
    description: [
      "Lorem ipsum dolor sit amet consectetur. Tellus posuere arcu gravida turpis",
      <br />,
      "morbi. In nunc at a varius. Nibh ornare sit interdum sit mauris blandit.",
      <br />,
      "Fringilla elementum erat tortor purus magnis proin urna. ",
    ],
  },
  {
    id: "2",
    title: ["Meet People From All", <br />, "Walks Of Life"],
    description: [
      "Lorem ipsum dolor sit amet consectetur. Tellus posuere arcu gravida turpis",
      <br />,
      "morbi. In nunc at a varius. Nibh ornare sit interdum sit mauris blandit.",
      <br />,
      "Fringilla elementum erat tortor purus magnis proin urna. ",
    ],
  },
  {
    id: "3",
    title: ["Meet People From All", <br />, "Walks Of Life"],
    description: [
      "Lorem ipsum dolor sit amet consectetur. Tellus posuere arcu gravida turpis",
      <br />,
      "morbi. In nunc at a varius. Nibh ornare sit interdum sit mauris blandit.",
      <br />,
      "Fringilla elementum erat tortor purus magnis proin urna. ",
    ],
  },
];
const SlideContainer = ({ item }) => (
  <div className="text-center text-white px-20 pb-6 ">
    <div>
      <span className="lg:text-[64px] md:text-[62px] sm:text-[60px] text-[58px] font-openSans_bold leading-tight">
        {item?.title}
      </span>
    </div>
    <div>
      <span className="lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] font-openSans_regular ">
        {item?.description}
      </span>
    </div>
  </div>
);

const Home = () => {
  return (
    <section
      className={`min-h-screen bg-no-repeat bg-c_282828 bg-cover `}
      style={{
        backgroundImage: `url('${homeBackgroundImage}')`,
      }}
    >
      {" "}
      <Helmet>
        <title>Meet People From All Walks Of Life - {siteTitle()}</title>
      </Helmet>
      <div className="py-8">
        <div className="flex justify-center">
          <img src={brandLogo.default} />
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="w-10/12">
            <OwlCarousel
              className="owl-theme"
              loop
              nav
              items={1}
              navText={[
                '<div class="bg-white w-[80px] flex items-center justify-center h rounded-full"><i class="fa fa-angle-left text-c_FD6769 bg-white" aria-hidden="true"></i></div>',
                '<div class="bg-white w-[80px] flex items-center justify-center h rounded-full"><i class="fa fa-angle-right  text-c_FD6769 " aria-hidden="true"></i></div>',
              ]}
            >
              {owlArray?.map((item) => (
                <SlideContainer item={item} />
              ))}
            </OwlCarousel>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-wrap justify-center gap-10 font-openSans_semiBold text-[16px]">
            <Link
              to="/create-account"
              className="bg-c_FD6769 text-white rounded-full min-h-[60px] w-96 flex justify-center items-center hover:brightness-110 hover:text-white"
            >
              <span>Create Account</span>
            </Link>
            <Link
              to="/sign-in"
              className="outline outline-white text-white rounded-full min-h-[60px] w-96 flex justify-center items-center hover:bg-white hover:text-black"
            >
              <span> Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GuestMiddleware(Home);
