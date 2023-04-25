import { useState } from "react";
import Modal from "../../../shared/modal";
const diamondShape = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.7897 0.746085C16.7449 0.670915 16.682 0.608809 16.607 0.565718C16.532 0.522628 16.4475 0.499999 16.3616 0.5H3.6384C3.55246 0.499999 3.46796 0.522628 3.393 0.565718C3.31805 0.608809 3.25514 0.670915 3.21031 0.746085L0.0736635 6.00647C0.0223654 6.09249 -0.00314288 6.19208 0.00030931 6.29284C0.0037615 6.39361 0.0360219 6.49111 0.0930808 6.57323L9.54985 20.1846L9.55321 20.1945L9.55607 20.1935L9.61894 20.284C9.66533 20.3508 9.72662 20.4052 9.79771 20.4428C9.8688 20.4804 9.94762 20.5 10.0276 20.5H10.0283C10.1084 20.4999 10.1873 20.4801 10.2584 20.4423C10.3295 20.4046 10.3908 20.3499 10.4371 20.2829L10.4996 20.1923L10.5024 20.1933L10.5057 20.1834L19.9077 6.57205C19.9644 6.48996 19.9964 6.39264 19.9997 6.29212C20.003 6.1916 19.9775 6.09229 19.9263 6.00647L16.7897 0.746085ZM11.1279 1.52879H15.6602L14.4153 5.26544L11.1279 1.52879ZM13.4956 5.75617H6.54656L10.0021 1.78506L13.4956 5.75617ZM5.60836 5.28915L4.34534 1.52894H8.88058L5.60836 5.28915ZM4.70388 5.75617H1.39905L3.51296 2.21097L4.70388 5.75617ZM13.9093 6.78495L10.0258 18.4413L6.1107 6.78521L13.9093 6.78495ZM16.4913 2.21771L18.6012 5.75617H15.3122L16.4913 2.21771ZM1.4722 6.78495H5.04928L8.39691 16.7518L1.4722 6.78495ZM14.9694 6.78495H18.531L11.6513 16.745L14.9694 6.78495Z"
      fill="url(#paint0_linear_0_4903)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_4903"
        x1="-2.38194"
        y1="-1.58984"
        x2="27.4983"
        y2="13.8785"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0494294" stop-color="#F3F3F3" />
        <stop offset="1" stop-color="#7E7E7E" />
      </linearGradient>
    </defs>
  </svg>
);
const silverIcon = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.7897 0.746085C16.7449 0.670915 16.682 0.608809 16.607 0.565718C16.532 0.522628 16.4475 0.499999 16.3616 0.5H3.6384C3.55246 0.499999 3.46796 0.522628 3.393 0.565718C3.31805 0.608809 3.25514 0.670915 3.21031 0.746085L0.0736635 6.00647C0.0223654 6.09249 -0.00314288 6.19208 0.00030931 6.29284C0.0037615 6.39361 0.0360219 6.49111 0.0930808 6.57323L9.54985 20.1846L9.55321 20.1945L9.55607 20.1935L9.61894 20.284C9.66533 20.3508 9.72662 20.4052 9.79771 20.4428C9.8688 20.4804 9.94762 20.5 10.0276 20.5H10.0283C10.1084 20.4999 10.1873 20.4801 10.2584 20.4423C10.3295 20.4046 10.3908 20.3499 10.4371 20.2829L10.4996 20.1923L10.5024 20.1933L10.5057 20.1834L19.9077 6.57205C19.9644 6.48996 19.9964 6.39264 19.9997 6.29212C20.003 6.1916 19.9775 6.09229 19.9263 6.00647L16.7897 0.746085ZM11.1279 1.52879H15.6602L14.4153 5.26544L11.1279 1.52879ZM13.4956 5.75617H6.54656L10.0021 1.78506L13.4956 5.75617ZM5.60836 5.28915L4.34534 1.52894H8.88058L5.60836 5.28915ZM4.70388 5.75617H1.39905L3.51296 2.21097L4.70388 5.75617ZM13.9093 6.78495L10.0258 18.4413L6.1107 6.78521L13.9093 6.78495ZM16.4913 2.21771L18.6012 5.75617H15.3122L16.4913 2.21771ZM1.4722 6.78495H5.04928L8.39691 16.7518L1.4722 6.78495ZM14.9694 6.78495H18.531L11.6513 16.745L14.9694 6.78495Z"
      fill="url(#paint0_linear_0_4903)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_4903"
        x1="-2.38194"
        y1="-1.58984"
        x2="27.4983"
        y2="13.8785"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0494294" stop-color="#F3F3F3" />
        <stop offset="1" stop-color="#7E7E7E" />
      </linearGradient>
    </defs>
  </svg>
);
const goldenIcon = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.7897 0.746085C16.7449 0.670915 16.682 0.608809 16.607 0.565718C16.532 0.522628 16.4475 0.499999 16.3616 0.5H3.6384C3.55246 0.499999 3.46796 0.522628 3.393 0.565718C3.31805 0.608809 3.25514 0.670915 3.21031 0.746085L0.0736635 6.00647C0.0223654 6.09249 -0.00314288 6.19208 0.00030931 6.29284C0.0037615 6.39361 0.0360219 6.49111 0.0930808 6.57323L9.54985 20.1846L9.55321 20.1945L9.55607 20.1935L9.61894 20.284C9.66533 20.3508 9.72662 20.4052 9.79771 20.4428C9.8688 20.4804 9.94762 20.5 10.0276 20.5H10.0283C10.1084 20.4999 10.1873 20.4801 10.2584 20.4423C10.3295 20.4046 10.3908 20.3499 10.4371 20.2829L10.4996 20.1923L10.5024 20.1933L10.5057 20.1834L19.9077 6.57205C19.9644 6.48996 19.9964 6.39264 19.9997 6.29212C20.003 6.1916 19.9775 6.09229 19.9263 6.00647L16.7897 0.746085ZM11.1279 1.52879H15.6602L14.4153 5.26544L11.1279 1.52879ZM13.4956 5.75617H6.54656L10.0021 1.78506L13.4956 5.75617ZM5.60836 5.28915L4.34534 1.52894H8.88058L5.60836 5.28915ZM4.70388 5.75617H1.39905L3.51296 2.21097L4.70388 5.75617ZM13.9093 6.78495L10.0258 18.4413L6.1107 6.78521L13.9093 6.78495ZM16.4913 2.21771L18.6012 5.75617H15.3122L16.4913 2.21771ZM1.4722 6.78495H5.04928L8.39691 16.7518L1.4722 6.78495ZM14.9694 6.78495H18.531L11.6513 16.745L14.9694 6.78495Z"
      fill="url(#paint0_linear_0_4956)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_4956"
        x1="-2.38194"
        y1="-1.58984"
        x2="27.4983"
        y2="13.8785"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD6769" />
        <stop offset="1" stop-color="#FFE815" />
      </linearGradient>
    </defs>
  </svg>
);
const diamondIcon = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.7897 0.746085C16.7449 0.670915 16.682 0.608809 16.607 0.565718C16.532 0.522628 16.4475 0.499999 16.3616 0.5H3.6384C3.55246 0.499999 3.46796 0.522628 3.393 0.565718C3.31805 0.608809 3.25514 0.670915 3.21031 0.746085L0.0736635 6.00647C0.0223654 6.09249 -0.00314288 6.19208 0.00030931 6.29284C0.0037615 6.39361 0.0360219 6.49111 0.0930808 6.57323L9.54985 20.1846L9.55321 20.1945L9.55607 20.1935L9.61894 20.284C9.66533 20.3508 9.72662 20.4052 9.79771 20.4428C9.8688 20.4804 9.94762 20.5 10.0276 20.5C10.1077 20.4999 10.1873 20.4801 10.2584 20.4423C10.3295 20.4046 10.3908 20.3499 10.4371 20.2829L10.4996 20.1923L10.5024 20.1933L10.5057 20.1834L19.9077 6.57205C19.9644 6.48996 19.9964 6.39264 19.9997 6.29212C20.003 6.1916 19.9775 6.09229 19.9263 6.00647L16.7897 0.746085ZM11.1279 1.52879H15.6602L14.4153 5.26544L11.1279 1.52879ZM13.4956 5.75617H6.54656L10.0021 1.78506L13.4956 5.75617ZM5.60836 5.28915L4.34534 1.52894H8.88058L5.60836 5.28915ZM4.70388 5.75617H1.39905L3.51296 2.21097L4.70388 5.75617ZM13.9093 6.78495L10.0258 18.4413L6.1107 6.78521L13.9093 6.78495ZM16.4913 2.21771L18.6012 5.75617H15.3122L16.4913 2.21771ZM1.4722 6.78495H5.04928L8.39691 16.7518L1.4722 6.78495ZM14.9694 6.78495H18.531L11.6513 16.745L14.9694 6.78495Z"
      fill="url(#paint0_linear_0_4930)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_4930"
        x1="-2.38194"
        y1="-1.58984"
        x2="27.4983"
        y2="13.8785"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0494294" stop-color="#00CCF9" />
        <stop offset="1" stop-color="#FEE501" />
      </linearGradient>
    </defs>
  </svg>
);
const platinumIcon = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.7897 0.746085C16.7449 0.670915 16.682 0.608809 16.607 0.565718C16.532 0.522628 16.4475 0.499999 16.3616 0.5H3.6384C3.55246 0.499999 3.46796 0.522628 3.393 0.565718C3.31805 0.608809 3.25514 0.670915 3.21031 0.746085L0.0736635 6.00647C0.0223654 6.09249 -0.00314288 6.19208 0.00030931 6.29284C0.0037615 6.39361 0.0360219 6.49111 0.0930808 6.57323L9.54985 20.1846L9.55321 20.1945L9.55607 20.1935L9.61894 20.284C9.66533 20.3508 9.72662 20.4052 9.79771 20.4428C9.8688 20.4804 9.94762 20.5 10.0276 20.5H10.0283C10.1084 20.4999 10.1873 20.4801 10.2584 20.4423C10.3295 20.4046 10.3908 20.3499 10.4371 20.2829L10.4996 20.1923L10.5024 20.1933L10.5057 20.1834L19.9077 6.57205C19.9644 6.48996 19.9964 6.39264 19.9997 6.29212C20.003 6.1916 19.9775 6.09229 19.9263 6.00647L16.7897 0.746085ZM11.1279 1.52879H15.6602L14.4153 5.26544L11.1279 1.52879ZM13.4956 5.75617H6.54656L10.0021 1.78506L13.4956 5.75617ZM5.60836 5.28915L4.34534 1.52894H8.88058L5.60836 5.28915ZM4.70388 5.75617H1.39905L3.51296 2.21097L4.70388 5.75617ZM13.9093 6.78495L10.0258 18.4413L6.1107 6.78521L13.9093 6.78495ZM16.4913 2.21771L18.6012 5.75617H15.3122L16.4913 2.21771ZM1.4722 6.78495H5.04928L8.39691 16.7518L1.4722 6.78495ZM14.9694 6.78495H18.531L11.6513 16.745L14.9694 6.78495Z"
      fill="url(#paint0_linear_0_4956)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_4956"
        x1="-2.38194"
        y1="-1.58984"
        x2="27.4983"
        y2="13.8785"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD6769" />
        <stop offset="1" stop-color="#FFE815" />
      </linearGradient>
    </defs>
  </svg>
);
const checkBox = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="20" rx="4" fill="#30B52D" />
    <path
      d="M14 7L8.5 12.5L6 10"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const monthlyPackageArray = [
  {
    category: "silver",
    title: "Silver 15 Minutes",
    icon: silverIcon,
    price: "$15",
    packageItems: [
      {
        label: "Messages",
        description: "Unlimited email & Text Messages",
        price: "free",
      },
      {
        label: "Phone Call",
        description: "Phone call to 1 friend",
        price: "$25",
      },
      { label: "Facetime", description: "Facetime to 1 friend", price: "$15" },
    ],
  },
  {
    category: "golden",
    title: "Gold 30 minutes",
    icon: goldenIcon,
    price: "$30",
    packageItems: [
      {
        label: "Messages",
        description: "Unlimited email & Text Messages",
        price: "free",
      },
      {
        label: "Phone Call",
        description: "Phone call to 1 friend",
        price: "$25",
      },
      { label: "Facetime", description: "Facetime to 1 friend", price: "$15" },
    ],
  },
  {
    category: "diamond",
    title: "Diamond 1 hour",
    icon: diamondIcon,
    price: "$50",
    packageItems: [
      {
        label: "Messages",
        description: "Unlimited email & Text Messages",
        price: "free",
      },
      {
        label: "Phone Call",
        description: "Phone call to 1 friend",
        price: "$25",
      },
      { label: "Facetime", description: "Facetime to 1 friend", price: "$15" },
    ],
  },
  {
    category: "platinum",
    title: "Platinum 2 hours",
    icon: platinumIcon,
    price: "$75",
    packageItems: [
      {
        label: "Messages",
        description: "Unlimited email & Text Messages",
        price: "free",
      },
      {
        label: "Phone Call",
        description: "Phone call to 1 friend",
        price: "$25",
      },
      { label: "Facetime", description: "Facetime to 1 friend", price: "$15" },
    ],
  },
];

const addOnPackageArray = [
  {
    category: "silver",
    title: "Silver",
    icon: silverIcon,
    packageItems: [
      {
        label: "Messages",
        description: "Unlimited email & Text Messages",
        price: "free",
      },
      {
        label: "Phone Call",
        description: "Phone call to 1 friend",
        price: "$25",
      },
      { label: "Facetime", description: "Facetime to 1 friend", price: "$15" },
    ],
  },
  {
    category: "golden",
    title: "Gold",
    icon: goldenIcon,
    packageItems: [
      {
        label: "Messages",
        description: "Unlimited email & Text Messages",
        price: "free",
      },
      {
        label: "Phone Call",
        description: "Phone call to 1 friend",
        price: "$25",
      },
      { label: "Facetime", description: "Facetime to 1 friend", price: "$15" },
    ],
  },
  {
    category: "diamond",
    title: "Diamond",
    icon: diamondIcon,
    packageItems: [
      {
        label: "Messages",
        description: "Unlimited email & Text Messages",
        price: "free",
      },
      {
        label: "Phone Call",
        description: "Phone call to 1 friend",
        price: "$25",
      },
      { label: "Facetime", description: "Facetime to 1 friend", price: "$15" },
    ],
  },
  {
    category: "platinum",
    title: "Platinum",
    icon: platinumIcon,

    packageItems: [
      {
        label: "Messages",
        description: "Unlimited email & Text Messages",
        price: "free",
      },
      {
        label: "Phone Call",
        description: "Phone call to 1 friend",
        price: "$25",
      },
      { label: "Facetime", description: "Facetime to 1 friend", price: "$15" },
    ],
  },
];
const SubscriptionModal = ({ open = true, setOpen }) => {
  const [selectedTab, setSelectedTab] = useState("Monthly Based");

  const monthlySubscription = () => (
    <>
      {monthlyPackageArray?.map((item) => {
        return (
          <div
            className={`shadow border-2 border-[#E6F4F6] border-opacity-90 rounded-2xl lg:p-5 p-3 ${
              item?.category === "golden" ? "bg-[#FD6769]" : "bg-white"
            }`}
          >
            {/* card header */}
            <div className="flex justify-between w-full flex-wrap">
              <div>
                <div className="flex items-center space-x-4">
                  <div>
                    <span
                      className={`text-[20px] font-openSans_bold leading-tight  ${
                        item?.category === "golden"
                          ? "text-white"
                          : "text-[#2A2A2A]"
                      }`}
                    >
                      {item?.title}
                    </span>
                  </div>
                  <div>{item?.icon}</div>
                </div>
                <div>
                  <span
                    className={`font-openSans_regular text-[10px] ${
                      item?.category === "golden"
                        ? "text-white"
                        : "text-[#949494]"
                    }`}
                  >
                    In this package you have
                  </span>
                </div>
              </div>
              <div>
                <button
                  className={`focus:outline-none text-[14px] font-openSans_bold flex justify-center items-center gap-2 min-h-[39px] min-w-[120px] rounded ${
                    item?.category === "golden"
                      ? "bg-white text-[#FD6769]"
                      : "bg-[#FD6769] text-white"
                  }`}
                >
                  <span>Get Started</span>
                </button>
              </div>
            </div>

            {/* card body */}
            <div className="flex justify-between items-center flex-wrap w-full mt-4">
              <div className="space-y-4">
                {item?.packageItems?.map((item2) => {
                  return (
                    <div className="flex items-center space-x-3">
                      <div>{checkBox}</div>
                      <div>
                        <div>
                          <span
                            className={`text-[12px] font-openSans_regular leading-tight ${
                              item?.category === "golden"
                                ? "text-white"
                                : "text-[#949494]"
                            }`}
                          >
                            {item2?.label}
                          </span>
                        </div>
                        <div>
                          <span
                            className={`text-[12px] font-openSans_medium leading-tight ${
                              item?.category === "golden"
                                ? "text-white"
                                : "text-[#515165]"
                            }`}
                          >
                            {item2?.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <span
                  className={`text-[32px] font-openSans_bold ${
                    item?.category === "golden"
                      ? "text-white"
                      : "text-[#0493A3]"
                  }`}
                >
                  {item?.price}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
  const addOnSubscription = () => (
    <>
      {addOnPackageArray?.map((item) => {
        return (
          <div
            className={`shadow border-2 border-[#E6F4F6] border-opacity-90 rounded-2xl lg:p-5 p-3 ${
              item?.category === "golden" ? "bg-[#FD6769]" : "bg-white"
            }`}
          >
            {/* card header */}
            <div className="flex justify-between w-full flex-wrap">
              <div>
                <div className="flex items-center space-x-4">
                  <div>
                    <span
                      className={`text-[20px] font-openSans_bold leading-tight  ${
                        item?.category === "golden"
                          ? "text-white"
                          : "text-[#2A2A2A]"
                      }`}
                    >
                      {item?.title}
                    </span>
                  </div>
                  <div>{item?.icon}</div>
                </div>
                <div>
                  <span
                    className={`font-openSans_regular text-[10px] ${
                      item?.category === "golden"
                        ? "text-white"
                        : "text-[#949494]"
                    }`}
                  >
                    In this package you have
                  </span>
                </div>
              </div>
              <div>
                <button
                  className={`focus:outline-none text-[14px] font-openSans_bold flex justify-center items-center gap-2 min-h-[39px] min-w-[120px] rounded ${
                    item?.category === "golden"
                      ? "bg-white text-[#FD6769]"
                      : "bg-[#FD6769] text-white"
                  }`}
                >
                  <span>Get Started</span>
                </button>
              </div>
            </div>

            {/* card body */}
            <div className="flex justify-between items-center flex-wrap w-full mt-4">
              <div className="space-y-4 w-full">
                {item?.packageItems?.map((item2) => {
                  return (
                    <div className="flex items-center justify-between w-full space-x-3">
                      <div className="flex items-center space-x-3">
                        <div>{checkBox}</div>
                        <div>
                          <div>
                            <span
                              className={`text-[12px] font-openSans_regular leading-tight ${
                                item?.category === "golden"
                                  ? "text-white"
                                  : "text-[#949494]"
                              }`}
                            >
                              {item2?.label}
                            </span>
                          </div>
                          <div>
                            <span
                              className={`text-[12px] font-openSans_medium leading-tight ${
                                item?.category === "golden"
                                  ? "text-white"
                                  : "text-[#515165]"
                              }`}
                            >
                              {item2?.description}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span
                          className={`text-[20px] font-openSans_bold ${
                            item?.category === "golden"
                              ? "text-white"
                              : "text-[#0493A3]"
                          }`}
                        >
                          {item2?.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
  const tabsOptions = ["Monthly Based", "Add-Ons"];
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={"Let’s Talk"}
      subTitle={
        "You can choose from many of our subscription plans, We have the perfect plan for you"
      }
      size="lg"
      titleCenter={true}
    >
      <div className="space-y-10 lg:p-5 p-3">
        <div className="flex justify-center">
          <div className="lg:min-w-[453px] min-w-[300px] min-h-[50px] border border-[#C5D0E6] rounded-md flex justify-between items-center p-1">
            {tabsOptions?.map((item) => (
              <button
                onClick={() => setSelectedTab(item)}
                className={`focus:outline-none h-[40px] lg:w-[216px] min-w-[150px] rounded-md text-[16px] font-openSans_medium ${
                  selectedTab === item
                    ? "text-[#FFFFFF] bg-[#0493A3]"
                    : "text-[#949494]"
                }`}
              >
                {item}
              </button>
            ))}

            {/* <button className="h-[40px] w-[216px] rounded-md text-[16px] min-w-[#0493A3] text-[#949494] font-openSans_medium">
              Add-Ons
            </button> */}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          {selectedTab === tabsOptions[0] && monthlySubscription()}
          {selectedTab === tabsOptions[1] && addOnSubscription()}
        </div>
      </div>
    </Modal>
  );
};
export default SubscriptionModal;