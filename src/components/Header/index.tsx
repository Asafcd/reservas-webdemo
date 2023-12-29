import React from "react";

import { Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
          <div className="header-row ">
            <Img
              className="h-[30px] w-[173px]"
              src="images/img_logo.svg"
              alt="logo"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex md:flex-col flex-row gap-10 sm:hidden items-center justify-center w-auto common-row-list">
            <li>
              <div className="flex flex-row gap-2.5 items-center justify-start">
                <Text
                  className="text-base text-gray-800 text-right w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Promociones
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_discount.svg"
                  alt="discount"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2.5 items-center justify-start">
                <Text
                  className="text-base text-gray-800 text-right w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Favoritos
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_grade.svg"
                  alt="grade"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2.5 items-center justify-start">
                <Text
                  className="text-base text-gray-800 text-right w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Cerca de mí
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_locationon.svg"
                  alt="locationon"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2.5 items-center justify-start">
                <Text
                  className="text-base text-gray-800 text-right w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Pick Up
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_shoppingbasket.svg"
                  alt="shoppingbasket"
                />
              </div>
            </li>
          </ul>
          <div className="flex flex-col sm:hidden items-start justify-start w-auto">
            <div className="flex flex-row gap-2.5 h-[30px] md:h-auto items-center justify-start w-auto">
              <Text
                className="text-base text-gray-900 text-right w-auto"
                size="txtInterMedium16Gray900"
              >
                My Account
              </Text>
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_profile24outline.svg"
                alt="profile24outlin"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
