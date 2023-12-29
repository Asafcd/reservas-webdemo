import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, PagerIndicator, Slider, Text } from "components";
import Header from "components/Header";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-montserrat gap-4 items-start justify-start mx-auto overflow-auto pb-[45px] w-full">
        <div className="flex flex-col gap-4 items-center pr-60 md:px-5 w-full">
          <Header className="bg-white-A700 flex gap-2 h-[74px] md:h-auto items-center justify-between md:px-10 px-20 sm:px-5 py-[22px] w-full" />
          <div className="font-poppins overflow-x-auto w-full">
            <div className="flex flex-col gap-[23px] items-start justify-start max-w-[2580px] md:pl-10 pl-20 sm:pl-5 w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                size="txtPoppinsRegular28"
              >
                Categoría
              </Text>
              <div className="flex flex-col font-montserrat items-center justify-center max-w-[1840px] md:px-10 px-20 sm:px-5 w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-center w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[140px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-2.5"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    }
                    shape="round"
                    color="blue_800"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-medium leading-[normal] text-base text-right">
                      Bares
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[201px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-2.5"
                        src="images/img_ramendining.svg"
                        alt="ramen_dining"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-medium leading-[normal] text-base text-right">
                      Restaurantes
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[160px]"
                    leftIcon={
                      <div className="h-6 mr-2.5 w-6 bg-gray-900_02">
                        <Img
                          className="h-6"
                          src="images/img_menu.svg"
                          alt="menu"
                        />
                      </div>
                    }
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-medium leading-[normal] text-base text-right">
                      Karaoke
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[132px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-2.5"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-medium leading-[normal] text-base text-right">
                      Club
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[155px]"
                    leftIcon={
                      <div className="h-6 mr-2.5 w-6 bg-gray-900_02">
                        <Img
                          className="h-6"
                          src="images/img_vector.svg"
                          alt="Vector"
                        />
                      </div>
                    }
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-medium leading-[normal] text-base text-right">
                      Boliche
                    </div>
                  </Button>
                </div>
              </div>
              <div className="font-poppins relative w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  paddingRight={540}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 2 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="m-auto w-full"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex flex-col items-start justify-start mx-2.5">
                        <div className="h-[390px] relative w-full">
                          <Img
                            className="h-[390px] m-auto object-cover w-[1280px]"
                            src="images/img_movieposter29.png"
                            alt="movieposterTwentyNine"
                          />
                          <div className="absolute flex sm:flex-col flex-row md:gap-10 h-max inset-y-[0] items-center justify-between my-auto right-[2%] w-[91%]">
                            <div className="flex flex-col gap-[27px] items-start justify-start w-[388px] sm:w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                                  size="txtPoppinsMedium32"
                                >
                                  Karaoke fortuna
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start w-full">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_locationon_white_a700.svg"
                                  alt="locationon"
                                />
                                <Text
                                  className="flex-1 text-base text-white-A700 w-auto"
                                  size="txtPoppinsMedium16"
                                >
                                  2861 62nd Ave, Oakland, CA 94605
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                                    <div className="flex flex-col h-6 items-center justify-start w-6">
                                      <Img
                                        className="h-6 outline outline-[2px] outline-white-A700 rounded-bl-[1px] rounded-br-[1px] w-6"
                                        src="images/img_star2_12.svg"
                                        alt="starTwo"
                                      />
                                    </div>
                                    <Text
                                      className="flex-1 text-sm text-white-A700 w-auto"
                                      size="txtPoppinsMedium14"
                                    >
                                      4.8 - 1,200 reviews
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_editcalendar.svg"
                                      alt="editcalendar"
                                    />
                                    <Text
                                      className="flex-1 text-sm text-white-A700 w-auto"
                                      size="txtPoppinsMedium14"
                                    >
                                      Viernes - Domingo
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-row gap-2 items-center justify-start w-[186px]">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_accesstime.svg"
                                      alt="accesstime"
                                    />
                                    <Text
                                      className="flex-1 text-sm text-white-A700 w-auto"
                                      size="txtPoppinsMedium14"
                                    >
                                      4:00 p.m. - 3:00 a.m.
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <Button
                                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] rounded-[16px]"
                                  onClick={() => navigate("/propertydetails")}
                                  leftIcon={
                                    <Img
                                      className="h-6 mb-px mr-2"
                                      src="images/img_television.svg"
                                      alt="television"
                                    />
                                  }
                                  color="blue_800"
                                  size="md"
                                  variant="fill"
                                >
                                  <div className="font-semibold leading-[normal] text-base text-right">
                                    Reservar
                                  </div>
                                </Button>
                              </div>
                            </div>
                            <Img
                              className="h-[60px] w-[60px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-3 bg-blue-800 w-3 relative" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3 relative"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="absolute bottom-[6%] flex gap-4 h-3 left-[22%] w-[152px]"
                  count={6}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-blue-800 w-3 relative"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3 relative"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins gap-4 items-end pl-20 md:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-[2080px] w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-[89%]">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                size="txtPoppinsRegular28"
              >
                Promociones
              </Text>
              <div className="overflow-x-auto w-full">
                <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_image.png"
                      alt="image_One"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-4 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-800 text-xl w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          Karaoke Fortuna
                        </Text>
                        <Input
                          name="location"
                          placeholder="2861 62nd Ave, Oakland, CA 94605"
                          className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-blue_gray-800 text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          }
                          size="xs"
                        ></Input>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
                                  src="images/img_star2_14.svg"
                                  alt="starTwo"
                                />
                              </div>
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                4.8 - 1,200 reviews
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_editcalendar_blue_800.svg"
                                alt="editcalendar"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_accesstime_blue_800.svg"
                                alt="accesstime"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-manrope items-center justify-start w-full">
                          <Button
                            className="common-pointer cursor-pointer font-semibold h-12 min-w-[138px] text-base text-center"
                            onClick={() => navigate("/propertydetails")}
                            shape="round"
                            color="blue_800"
                            size="sm"
                            variant="fill"
                          >
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_image_260x384.png"
                      alt="image_Three"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-4 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-800 text-xl w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          Bar El globo
                        </Text>
                        <Input
                          name="location_One"
                          placeholder="2861 62nd Ave, Oakland, CA 94605"
                          className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-blue_gray-800 text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          }
                          size="xs"
                        ></Input>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
                                  src="images/img_star2_15.svg"
                                  alt="starTwo_One"
                                />
                              </div>
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                4.8 - 1,200 reviews
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_editcalendar_blue_800.svg"
                                alt="editcalendar_One"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_accesstime_blue_800.svg"
                                alt="accesstime_One"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-manrope items-center justify-start w-full">
                          <Button
                            className="cursor-pointer font-semibold h-12 min-w-[138px] text-base text-center"
                            shape="round"
                            color="blue_800"
                            size="sm"
                            variant="fill"
                          >
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_image_1.png"
                      alt="image_Five"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-4 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-800 text-xl w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          Bar Oasis
                        </Text>
                        <Input
                          name="location_Two"
                          placeholder="2861 62nd Ave, Oakland, CA 94605"
                          className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-blue_gray-800 text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          }
                          size="xs"
                        ></Input>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
                                  src="images/img_star2_16.svg"
                                  alt="starTwo_Two"
                                />
                              </div>
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                4.8 - 1,200 reviews
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_editcalendar_blue_800.svg"
                                alt="editcalendar_Two"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_accesstime_blue_800.svg"
                                alt="accesstime_Two"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-manrope items-center justify-start w-full">
                          <Button
                            className="cursor-pointer font-semibold h-12 min-w-[138px] text-base text-center"
                            shape="round"
                            color="blue_800"
                            size="sm"
                            variant="fill"
                          >
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_image_2.png"
                      alt="image_Seven"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-4 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-800 text-xl w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          Thirsty
                        </Text>
                        <Input
                          name="location_Three"
                          placeholder="2861 62nd Ave, Oakland, CA 94605"
                          className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-blue_gray-800 text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          }
                          size="xs"
                        ></Input>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
                                  src="images/img_star2_17.svg"
                                  alt="starTwo_Three"
                                />
                              </div>
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                4.8 - 1,200 reviews
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_editcalendar_blue_800.svg"
                                alt="editcalendar_Three"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_accesstime_blue_800.svg"
                                alt="accesstime_Three"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-manrope items-center justify-start w-full">
                          <Button
                            className="cursor-pointer font-semibold h-12 min-w-[138px] text-base text-center"
                            shape="round"
                            color="blue_800"
                            size="sm"
                            variant="fill"
                          >
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_image_3.png"
                      alt="image_Nine"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-4 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-800 text-xl w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          Bar Paradise
                        </Text>
                        <Input
                          name="location_Four"
                          placeholder="2861 62nd Ave, Oakland, CA 94605"
                          className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-blue_gray-800 text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          }
                          size="xs"
                        ></Input>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
                                  src="images/img_star2_18.svg"
                                  alt="starTwo_Four"
                                />
                              </div>
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                4.8 - 1,200 reviews
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_editcalendar_blue_800.svg"
                                alt="editcalendar_Four"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_accesstime_blue_800.svg"
                                alt="accesstime_Four"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-manrope items-center justify-start w-full">
                          <Button
                            className="cursor-pointer font-semibold h-12 min-w-[138px] text-base text-center"
                            shape="round"
                            color="blue_800"
                            size="sm"
                            variant="fill"
                          >
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[2080px] w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-[89%]">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                size="txtPoppinsRegular28"
              >
                Los favoritos
              </Text>
              <div className="overflow-x-auto w-full">
                <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_image_4.png"
                      alt="image_Eleven"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-4 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-800 text-xl w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          Golazo Sports Bar
                        </Text>
                        <Input
                          name="location_Five"
                          placeholder="2861 62nd Ave, Oakland, CA 94605"
                          className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-blue_gray-800 text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          }
                          size="xs"
                        ></Input>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
                                  src="images/img_star2_19.svg"
                                  alt="starTwo_Five"
                                />
                              </div>
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                4.8 - 1,200 reviews
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_editcalendar_blue_800.svg"
                                alt="editcalendar_Five"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_accesstime_blue_800.svg"
                                alt="accesstime_Five"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-manrope items-center justify-start w-full">
                          <Button
                            className="common-pointer cursor-pointer font-semibold h-12 min-w-[138px] text-base text-center"
                            onClick={() => navigate("/propertydetails")}
                            shape="round"
                            color="blue_800"
                            size="sm"
                            variant="fill"
                          >
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_image_5.png"
                      alt="image_Thirteen"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-4 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-800 text-xl w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          Home Run Haven
                        </Text>
                        <Input
                          name="location_Six"
                          placeholder="2861 62nd Ave, Oakland, CA 94605"
                          className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-blue_gray-800 text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          }
                          size="xs"
                        ></Input>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
                                  src="images/img_star2_20.svg"
                                  alt="starTwo_Six"
                                />
                              </div>
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                4.8 - 1,200 reviews
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_editcalendar_blue_800.svg"
                                alt="editcalendar_Six"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_accesstime_blue_800.svg"
                                alt="accesstime_Six"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-manrope items-center justify-start w-full">
                          <Button
                            className="cursor-pointer font-semibold h-12 min-w-[138px] text-base text-center"
                            shape="round"
                            color="blue_800"
                            size="sm"
                            variant="fill"
                          >
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_image_6.png"
                      alt="image_Fifteen"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-4 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-800 text-xl w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          Goal Line Grill
                        </Text>
                        <Input
                          name="location_Seven"
                          placeholder="2861 62nd Ave, Oakland, CA 94605"
                          className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-blue_gray-800 text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          }
                          size="xs"
                        ></Input>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
                                  src="images/img_star2_21.svg"
                                  alt="starTwo_Seven"
                                />
                              </div>
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                4.8 - 1,200 reviews
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_editcalendar_blue_800.svg"
                                alt="editcalendar_Seven"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_accesstime_blue_800.svg"
                                alt="accesstime_Seven"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-manrope items-center justify-start w-full">
                          <Button
                            className="cursor-pointer font-semibold h-12 min-w-[138px] text-base text-center"
                            shape="round"
                            color="blue_800"
                            size="sm"
                            variant="fill"
                          >
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_image_7.png"
                      alt="image_Seventeen"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-4 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-800 text-xl w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          Sporting Spirit Saloon
                        </Text>
                        <Input
                          name="location_Eight"
                          placeholder="2861 62nd Ave, Oakland, CA 94605"
                          className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-blue_gray-800 text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          }
                          size="xs"
                        ></Input>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
                                  src="images/img_star2_22.svg"
                                  alt="starTwo_Eight"
                                />
                              </div>
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                4.8 - 1,200 reviews
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_editcalendar_blue_800.svg"
                                alt="editcalendar_Eight"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_accesstime_blue_800.svg"
                                alt="accesstime_Eight"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-manrope items-center justify-start w-full">
                          <Button
                            className="cursor-pointer font-semibold h-12 min-w-[138px] text-base text-center"
                            shape="round"
                            color="blue_800"
                            size="sm"
                            variant="fill"
                          >
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="images/img_image_8.png"
                      alt="image_Nineteen"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-4 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-800 text-xl w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          <>Athlete&#39;s Oasis</>
                        </Text>
                        <Input
                          name="location_Nine"
                          placeholder="2861 62nd Ave, Oakland, CA 94605"
                          className="font-semibold p-0 placeholder:text-blue_gray-800 text-base text-blue_gray-800 text-left w-full"
                          wrapClassName="flex w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                          }
                          size="xs"
                        ></Input>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start w-6">
                                <Img
                                  className="h-6 outline outline-[2px] outline-yellow-800 rounded-bl-[1px] rounded-br-[1px] w-6"
                                  src="images/img_star2_23.svg"
                                  alt="starTwo_Nine"
                                />
                              </div>
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                4.8 - 1,200 reviews
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_editcalendar_blue_800.svg"
                                alt="editcalendar_Nine"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_accesstime_blue_800.svg"
                                alt="accesstime_Nine"
                              />
                              <Text
                                className="flex-1 text-blue_gray-800 text-sm w-auto"
                                size="txtPoppinsRegular14"
                              >
                                1 Viernes - Domingo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-manrope items-center justify-start w-full">
                          <Button
                            className="cursor-pointer font-semibold h-12 min-w-[138px] text-base text-center"
                            shape="round"
                            color="blue_800"
                            size="sm"
                            variant="fill"
                          >
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
