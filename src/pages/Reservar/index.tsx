import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";

const dropdownlargeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownlargeOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReservarPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-montserrat items-start justify-start mx-auto pb-10 w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <header className="bg-white-A700 flex h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full">
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
                    <a href="javascript:">
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
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
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
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
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
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
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
                    </a>
                  </li>
                </ul>
                <div className="flex flex-col font-inter sm:hidden items-start justify-start w-auto">
                  <div className="flex flex-row gap-2.5 h-[30px] md:h-auto items-center justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_01 text-right w-auto"
                      size="txtInterMedium16"
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
            <div className="flex flex-col font-poppins items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1680px] mx-auto w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-11 items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                            size="txtPoppinsMedium28"
                          >
                            Karaoke fortuna
                          </Text>
                          <div className="flex flex-row gap-3 h-6 md:h-auto items-center justify-start w-[186px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_locationon_gray_900_03.svg"
                              alt="locationon_One"
                            />
                            <Text
                              className="flex-1 text-base text-gray-900_03 w-auto"
                              size="txtPoppinsRegular16"
                            >
                              A 11.2 KM de ti
                            </Text>
                          </div>
                          <Text
                            className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                            size="txtPoppinsSemiBold20Gray900"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <List
                          className="flex flex-col font-rubik gap-[30px] items-start w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 md:flex-col flex-row gap-[49px] items-center justify-start my-0 w-full">
                            <div className="flex flex-1 sm:flex-col flex-row gap-5 h-[120px] md:h-auto items-center justify-start w-full">
                              <Img
                                className="h-[120px] md:h-auto object-cover w-[120px]"
                                src="images/img_rectangle1480.png"
                                alt="rectangle1480"
                              />
                              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                <Text
                                  className="text-black-900_01 text-xl tracking-[-0.50px] w-auto"
                                  size="txtRalewayBold20"
                                >
                                  Mesa VIP
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-xl tracking-[-0.50px] w-auto"
                                  size="txtPoppinsRegular20"
                                >
                                  $ 75.00
                                </Text>
                              </div>
                            </div>
                            <div className="border border-black-900_01 border-solid flex flex-col items-center justify-center px-[15px] py-[5px] w-[142px]">
                              <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_bxminuscircle.svg"
                                  alt="bxminuscircle"
                                />
                                <Text
                                  className="text-black-900_01 text-lg tracking-[-0.50px] w-auto"
                                  size="txtRubikRegular18"
                                >
                                  0
                                </Text>
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_bxpluscircle1.svg"
                                  alt="bxpluscircleOne"
                                />
                              </div>
                            </div>
                            <Text
                              className="text-black-900_01 text-lg tracking-[-0.50px] w-auto"
                              size="txtRubikRegular18"
                            >
                              $ 75.00
                            </Text>
                            <Img
                              className="h-[50px] w-[50px]"
                              src="images/img_frame48096032.svg"
                              alt="frame48096032"
                            />
                          </div>
                          <div className="flex flex-1 md:flex-col flex-row gap-[49px] items-center justify-start my-0 w-full">
                            <div className="flex flex-1 sm:flex-col flex-row gap-5 h-[120px] md:h-auto items-center justify-start w-full">
                              <Img
                                className="h-[120px] md:h-auto object-cover w-[120px]"
                                src="images/img_rectangle1480.png"
                                alt="rectangle1480"
                              />
                              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                <Text
                                  className="text-black-900_01 text-xl tracking-[-0.50px] w-auto"
                                  size="txtRalewayBold20"
                                >
                                  Teak wood chair
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-xl tracking-[-0.50px] w-auto"
                                  size="txtPoppinsRegular20"
                                >
                                  $ 24.00
                                </Text>
                              </div>
                            </div>
                            <div className="border border-black-900_01 border-solid flex flex-col items-center justify-center px-[15px] py-[5px] w-[142px]">
                              <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_bxminuscircle.svg"
                                  alt="bxminuscircle"
                                />
                                <Text
                                  className="text-black-900_01 text-lg tracking-[-0.50px] w-auto"
                                  size="txtRubikRegular18"
                                >
                                  0
                                </Text>
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_bxpluscircle1.svg"
                                  alt="bxpluscircleOne"
                                />
                              </div>
                            </div>
                            <Text
                              className="text-black-900_01 text-lg tracking-[-0.50px] w-auto"
                              size="txtRubikRegular18"
                            >
                              $ 75.00
                            </Text>
                            <Img
                              className="h-[50px] w-[50px]"
                              src="images/img_frame48096032.svg"
                              alt="frame48096032"
                            />
                          </div>
                          <div className="flex flex-1 md:flex-col flex-row gap-[49px] items-center justify-start my-0 w-full">
                            <div className="flex flex-1 sm:flex-col flex-row gap-5 h-[120px] md:h-auto items-center justify-start w-full">
                              <Img
                                className="h-[120px] md:h-auto object-cover w-[120px]"
                                src="images/img_rectangle1480.png"
                                alt="rectangle1480"
                              />
                              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                <Text
                                  className="text-black-900_01 text-xl tracking-[-0.50px] w-auto"
                                  size="txtRalewayBold20"
                                >
                                  Teak wood chair
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-xl tracking-[-0.50px] w-auto"
                                  size="txtPoppinsRegular20"
                                >
                                  $ 24.00
                                </Text>
                              </div>
                            </div>
                            <div className="border border-black-900_01 border-solid flex flex-col items-center justify-center px-[15px] py-[5px] w-[142px]">
                              <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_bxminuscircle.svg"
                                  alt="bxminuscircle"
                                />
                                <Text
                                  className="text-black-900_01 text-lg tracking-[-0.50px] w-auto"
                                  size="txtRubikRegular18"
                                >
                                  0
                                </Text>
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_bxpluscircle1.svg"
                                  alt="bxpluscircleOne"
                                />
                              </div>
                            </div>
                            <Text
                              className="text-black-900_01 text-lg tracking-[-0.50px] w-auto"
                              size="txtRubikRegular18"
                            >
                              $ 75.00
                            </Text>
                            <Img
                              className="h-[50px] w-[50px]"
                              src="images/img_frame48096032.svg"
                              alt="frame48096032"
                            />
                          </div>
                          <div className="flex flex-1 md:flex-col flex-row gap-[49px] items-center justify-start my-0 w-full">
                            <div className="flex flex-1 sm:flex-col flex-row gap-5 h-[120px] md:h-auto items-center justify-start w-full">
                              <Img
                                className="h-[120px] md:h-auto object-cover w-[120px]"
                                src="images/img_rectangle1480.png"
                                alt="rectangle1480"
                              />
                              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                <Text
                                  className="text-black-900_01 text-xl tracking-[-0.50px] w-auto"
                                  size="txtRalewayBold20"
                                >
                                  Teak wood chair
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-xl tracking-[-0.50px] w-auto"
                                  size="txtPoppinsRegular20"
                                >
                                  $ 24.00
                                </Text>
                              </div>
                            </div>
                            <div className="border border-black-900_01 border-solid flex flex-col items-center justify-center px-[15px] py-[5px] w-[142px]">
                              <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_bxminuscircle.svg"
                                  alt="bxminuscircle"
                                />
                                <Text
                                  className="text-black-900_01 text-lg tracking-[-0.50px] w-auto"
                                  size="txtRubikRegular18"
                                >
                                  0
                                </Text>
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_bxpluscircle1.svg"
                                  alt="bxpluscircleOne"
                                />
                              </div>
                            </div>
                            <Text
                              className="text-black-900_01 text-lg tracking-[-0.50px] w-auto"
                              size="txtRubikRegular18"
                            >
                              $ 75.00
                            </Text>
                            <Img
                              className="h-[50px] w-[50px]"
                              src="images/img_frame48096032.svg"
                              alt="frame48096032"
                            />
                          </div>
                        </List>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                          size="txtPoppinsMedium20"
                        >
                          Información
                        </Text>
                        <Text
                          className="max-w-[1262px] md:max-w-full text-gray-600 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          <>
                            A slider is great way to display a slideshow
                            featuring images or videos, usually on your
                            homepage.Adding sliders to your site is no longer
                            difficult. You don’t have to know coding anymore.
                            Just use a slider widget and it will automatically
                            insert the slider on your web page.So, the Elementor
                            slider would be a great tool to work with when
                            building a WordPress site.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-6 items-start justify-start w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                            size="txtPoppinsMedium28"
                          >
                            Servicios
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                            <Button
                              className="border-2 border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[151px] rounded-[16px]"
                              leftIcon={
                                <Img
                                  className="h-6 mt-px mr-2.5"
                                  src="images/img_localbar.svg"
                                  alt="local_bar"
                                />
                              }
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              <div className="font-semibold leading-[normal] text-base text-right">
                                Barra libre
                              </div>
                            </Button>
                            <Button
                              className="border-2 border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[226px] rounded-[16px]"
                              leftIcon={
                                <Img
                                  className="h-6 mb-px mr-2.5"
                                  src="images/img_group.svg"
                                  alt="group"
                                />
                              }
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              <div className="font-semibold leading-[normal] text-base text-right">
                                Gabinetes privados
                              </div>
                            </Button>
                            <Button
                              className="border-2 border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[226px] rounded-[16px]"
                              leftIcon={
                                <Img
                                  className="h-6 mt-px mr-2.5"
                                  src="images/img_aire_acondicionado.svg"
                                  alt="Aire acondicionado"
                                />
                              }
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              <div className="font-semibold leading-[normal] text-base text-right">
                                Aire acondicionado
                              </div>
                            </Button>
                            <Button
                              className="border-2 border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[100px] rounded-[16px]"
                              leftIcon={
                                <Img
                                  className="h-6 mt-px mr-2.5"
                                  src="images/img_wifi.svg"
                                  alt="Wifi"
                                />
                              }
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              <div className="font-semibold leading-[normal] text-base text-right">
                                WiFi
                              </div>
                            </Button>
                            <Button
                              className="border-2 border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[187px] rounded-[16px]"
                              leftIcon={
                                <Img
                                  className="h-6 mt-px mr-2.5"
                                  src="images/img_nightlife.svg"
                                  alt="nightlife"
                                />
                              }
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              <div className="font-semibold leading-[normal] text-base text-right">
                                Música en vivo
                              </div>
                            </Button>
                            <Button
                              className="border-2 border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[114px] rounded-[16px]"
                              leftIcon={
                                <Img
                                  className="h-6 mt-px mr-2.5"
                                  src="images/img_lunchdining.svg"
                                  alt="lunch_dining"
                                />
                              }
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              <div className="font-semibold leading-[normal] text-base text-right">
                                Buffet
                              </div>
                            </Button>
                            <Button
                              className="border-2 border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[100px] rounded-[16px]"
                              leftIcon={
                                <Img
                                  className="h-6 mt-px mr-2.5"
                                  src="images/img_taxialert.svg"
                                  alt="taxi_alert"
                                />
                              }
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              <div className="font-semibold leading-[normal] text-base text-right">
                                Taxi
                              </div>
                            </Button>
                          </div>
                        </div>
                        <Img
                          className="h-[400px] md:h-auto object-cover w-full"
                          src="images/img_mapview.png"
                          alt="mapview"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-manrope items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                        size="txtManropeExtraBold28"
                      >
                        Información de contacto
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                        <Img
                          className="h-[150px] md:h-auto object-cover rounded-[10px] w-[150px]"
                          src="images/img_rectangle5599.png"
                          alt="rectangle5599"
                        />
                        <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                          <Text
                            className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                            size="txtManropeSemiBold20"
                          >
                            Karaoke fortuna
                          </Text>
                          <Input
                            name="reveiw"
                            placeholder="4.8 - 1,200 reviews"
                            className="font-semibold p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                            wrapClassName="flex w-full"
                            prefix={
                              <Img
                                className="mt-px mb-1 mr-3.5"
                                src="images/img_user.svg"
                                alt="user"
                              />
                            }
                            size="sm"
                          ></Input>
                          <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                            <Text
                              className="text-base text-gray-600 w-auto"
                              size="txtManropeMedium16"
                            >
                              KaraokeFortuna@relasto .com
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_call.svg"
                              alt="call"
                            />
                            <Text
                              className="text-base text-gray-600 w-auto"
                              size="txtManropeMedium16"
                            >
                              +65 0231 965 965
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start p-6 sm:px-5 rounded-[10px] w-auto">
                  <div className="flex flex-col font-inter gap-5 items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="flex h-8 items-center justify-center rounded-md w-8"
                        color="gray_100"
                        size="xs"
                        variant="outline"
                      >
                        <Img
                          src="images/img_arrowleft_blue_gray_900_01.svg"
                          alt="arrowleft"
                        />
                      </Button>
                      <Text
                        className="mt-[5px] text-blue_gray-900_01 text-xl"
                        size="txtInterRegular20"
                      >
                        September 2021
                      </Text>
                      <Button
                        className="flex h-8 items-center justify-center rotate-[-180deg] rounded-md w-8"
                        color="gray_100"
                        size="xs"
                        variant="outline"
                      >
                        <Img src="images/img_arrowright.svg" alt="arrowright" />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start w-[95%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                        <Text
                          className="text-[8px] text-blue_gray-900_01 text-center"
                          size="txtInterRegular8"
                        >
                          SUN
                        </Text>
                        <Text
                          className="text-[8px] text-blue_gray-900_01 text-center"
                          size="txtInterRegular8"
                        >
                          MON
                        </Text>
                        <Text
                          className="text-[8px] text-blue_gray-900_01 text-center"
                          size="txtInterRegular8"
                        >
                          TUE
                        </Text>
                        <Text
                          className="text-[8px] text-blue_gray-900_01 text-center"
                          size="txtInterRegular8"
                        >
                          WED
                        </Text>
                        <Text
                          className="text-[8px] text-blue_gray-900_01 text-center"
                          size="txtInterRegular8"
                        >
                          THU
                        </Text>
                        <Text
                          className="text-[8px] text-blue_gray-900_01 text-center"
                          size="txtInterRegular8"
                        >
                          FRI
                        </Text>
                        <Text
                          className="text-[8px] text-blue_gray-900_01 text-center"
                          size="txtInterRegular8"
                        >
                          SAT
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <List
                            className="flex flex-col gap-4 items-center w-[98%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-row items-center justify-between mr-[3px] my-0 w-[99%] md:w-full">
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                31
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                1
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                2
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                3
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                4
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                5
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                6
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between ml-[3px] my-0 w-[99%] md:w-full">
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                7
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                8
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                9
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                10
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                11
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                12
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                13
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between my-0 w-full">
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                14
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                15
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                16
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                17
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                18
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                19
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                20
                              </Text>
                            </div>
                          </List>
                          <div className="flex flex-row items-start justify-between mt-2.5 w-full">
                            <Text
                              className="mt-1.5 text-blue_gray-400 text-center text-xs"
                              size="txtInterRegular12"
                            >
                              21
                            </Text>
                            <Text
                              className="mt-1.5 text-blue_gray-400 text-center text-xs"
                              size="txtInterRegular12"
                            >
                              22
                            </Text>
                            <Text
                              className="mt-1.5 text-blue_gray-400 text-center text-xs"
                              size="txtInterRegular12"
                            >
                              23
                            </Text>
                            <Text
                              className="mt-1.5 text-blue_gray-400 text-center text-xs"
                              size="txtInterRegular12"
                            >
                              24
                            </Text>
                            <Text
                              className="mt-1.5 text-blue_gray-400 text-center text-xs"
                              size="txtInterRegular12"
                            >
                              25
                            </Text>
                            <Text
                              className="mt-1.5 text-blue_gray-400 text-center text-xs"
                              size="txtInterRegular12"
                            >
                              26
                            </Text>
                            <div className="bg-blue-A700 flex flex-col items-center justify-start p-1 rounded-[14px] w-auto">
                              <Text
                                className="text-center text-gray-50 text-xs"
                                size="txtInterRegular12Gray50"
                              >
                                27
                              </Text>
                              <div className="bg-gray-50 h-1 rounded-[50%] w-1"></div>
                            </div>
                          </div>
                          <List
                            className="flex flex-col gap-4 items-center mt-1.5 w-[98%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                28
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                1
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                2
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                3
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                4
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                5
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                6
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                7
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                8
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                9
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                10
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                11
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                12
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                13
                              </Text>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-manrope items-start justify-start w-full">
                    <SelectBox
                      className="border border-blue_gray-100 border-solid font-bold h-[60px] text-left text-lg w-full"
                      placeholderClassName="text-gray-600"
                      indicator={
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="dropdownlarge"
                      options={dropdownlargeOptionsList}
                      isSearchable={false}
                      placeholder="Tiempo en la mesa"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                  <SelectBox
                    className="border border-blue_gray-100 border-solid font-bold font-manrope h-[60px] text-left text-lg w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="dropdownlarge_One"
                    options={dropdownlargeOneOptionsList}
                    isSearchable={false}
                    placeholder="Hora de reserva"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                  <Button
                    className="common-pointer cursor-pointer font-manrope font-semibold text-base text-center w-full"
                    onClick={() => navigate("/propertydetailsone")}
                    shape="round"
                    color="blue_800"
                    size="md"
                    variant="fill"
                  >
                    Seleccionar fecha
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservarPage;
