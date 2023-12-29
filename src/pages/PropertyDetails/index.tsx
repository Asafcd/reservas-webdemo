import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Header from "components/Header";
import PropertyDetailsListstartwo from "components/PropertyDetailsListstartwo";

const PropertyDetailsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-montserrat items-start justify-start mx-auto pb-10 w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <Header className="bg-white-A700 flex gap-2 h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
            <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1680px] mx-auto w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[550px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5610.png"
                    alt="rectangle5610"
                  />
                </div>
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <Img
                    className="h-[263px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5611.png"
                    alt="rectangle5611"
                  />
                  <div className="flex flex-col gap-2 items-end justify-start w-96 sm:w-full">
                    <Img
                      className="h-[263px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                      src="images/img_rectangle5612.png"
                      alt="rectangle5612"
                    />
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[122px]"
                      leftIcon={
                        <Img
                          className="h-6 mb-px mr-1.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      <div className="!text-gray-900 font-bold text-left text-lg">
                        3 more
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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
                        <div className="flex md:flex-col flex-row gap-4 items-start justify-start md:pr-10 sm:pr-5 pr-[180px] w-full">
                          <div className="bg-white-A700 border border-gray-600 border-solid flex flex-1 flex-col items-center justify-center sm:px-5 px-6 py-[7px] rounded-[10px] w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                                size="txtPoppinsMedium24"
                              >
                                Calificar
                              </Text>
                              <PropertyDetailsListstartwo className="sm:flex-col flex-row gap-2 grid grid-cols-5 h-6 justify-start w-auto" />
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-col h-[75px] md:h-auto items-center justify-center sm:px-5 px-6 py-[7px] rounded-[10px] w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-lg tracking-[-0.48px] w-full"
                                size="txtPoppinsMedium18"
                              >
                                Viernes - Domingo
                              </Text>
                              <Text
                                className="text-gray-600 text-lg w-full"
                                size="txtPoppinsSemiBold18"
                              >
                                4:00 p.m. - 3:00 a.m.
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                          size="txtPoppinsMedium20"
                        >
                          Información
                        </Text>
                        <Text
                          className="max-w-[1192px] md:max-w-full text-gray-600 text-lg"
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
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-5 items-start justify-start w-[93%]">
                              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
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
                              </div>
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
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-auto"
                        size="txtManropeExtraBold28"
                      >
                        Mesas
                      </Text>
                      <List
                        className="sm:flex-col flex-row font-poppins md:gap-10 gap-20 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 h-8 md:h-auto items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtPoppinsRegular18"
                              >
                                Normal (1 - 8 asientos)
                              </Text>
                            </div>
                            <Text
                              className="text-gray-900 text-lg text-right w-auto"
                              size="txtPoppinsSemiBold18Gray900"
                            >
                              $100.00 MXN
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 h-8 md:h-auto items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtPoppinsRegular18"
                              >
                                Periqueras (1 - 4 asientos)
                              </Text>
                            </div>
                            <Text
                              className="text-gray-900 text-lg text-right w-auto"
                              size="txtPoppinsSemiBold18Gray900"
                            >
                              $70.00 MXN
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 h-8 md:h-auto items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtPoppinsRegular18"
                              >
                                VIP (1 - 8 asientos)
                              </Text>
                            </div>
                            <Text
                              className="text-gray-900 text-lg text-right w-auto"
                              size="txtPoppinsSemiBold18Gray900"
                            >
                              $150.00 MXN
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                            <div className="flex flex-1 sm:flex-col flex-row gap-2.5 h-8 md:h-auto items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtPoppinsRegular18"
                              >
                                VIP tarimas con consumo (1 - 8 asientos)
                              </Text>
                            </div>
                            <Text
                              className="text-gray-900 text-lg text-right w-auto"
                              size="txtPoppinsSemiBold18Gray900"
                            >
                              $90.00 MXN
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 h-8 md:h-auto items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtPoppinsRegular18"
                              >
                                Normal (9 - 20 asientos)
                              </Text>
                            </div>
                            <Text
                              className="text-gray-900 text-lg text-right w-auto"
                              size="txtPoppinsSemiBold18Gray900"
                            >
                              $200.00 MXN
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 h-8 md:h-auto items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtPoppinsRegular18"
                              >
                                VIP (9 - 20 asientos)
                              </Text>
                            </div>
                            <Text
                              className="text-gray-900 text-lg text-right w-auto"
                              size="txtPoppinsSemiBold18Gray900"
                            >
                              $300.00 MXN
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                            <div className="flex flex-1 sm:flex-col flex-row gap-2.5 h-8 md:h-auto items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtPoppinsRegular18"
                              >
                                VIP tarimas con consumo (9 - 20 asientos)
                              </Text>
                            </div>
                            <Text
                              className="text-gray-900 text-lg text-right w-auto"
                              size="txtPoppinsSemiBold18Gray900"
                            >
                              $180.00 MXN
                            </Text>
                          </div>
                        </div>
                      </List>
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
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex sm:flex-1 flex-col font-manrope items-start justify-start p-6 sm:px-5 rounded-[10px] w-96 sm:w-full">
                  <div className="flex flex-col items-start justify-start w-[336px]">
                    <div className="flex flex-col gap-6 items-start justify-start w-[336px] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                        size="txtManropeExtraBold28"
                      >
                        Datos de reserva
                      </Text>
                      <div className="flex flex-col gap-3 h-[275px] md:h-auto items-start justify-start w-full">
                        <Input
                          name="textfieldlarge"
                          placeholder="Nombre"
                          className="font-semibold p-0 placeholder:text-gray-600 text-left text-lg w-full"
                          wrapClassName="border border-blue_gray-100 border-solid flex w-full"
                          prefix={
                            <Img
                              className="h-6 mr-3.5 my-px"
                              src="images/img_lock_gray_600.svg"
                              alt="lock"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        ></Input>
                        <Input
                          name="textfieldlarge_One"
                          placeholder="Correo"
                          className="font-semibold p-0 placeholder:text-gray-600 text-left text-lg w-full"
                          wrapClassName="border border-blue_gray-100 border-solid flex w-full"
                          prefix={
                            <Img
                              className="h-6 mr-3.5 my-px"
                              src="images/img_lock_gray_600_24x24.svg"
                              alt="lock"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        ></Input>
                        <Input
                          name="textfieldlarge_Two"
                          placeholder="Teléfono"
                          className="font-semibold p-0 placeholder:text-gray-600 text-left text-lg w-full"
                          wrapClassName="border border-blue_gray-100 border-solid flex w-full"
                          prefix={
                            <Img
                              className="mt-px mb-auto h-6 mr-3.5"
                              src="images/img_call.svg"
                              alt="call"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        ></Input>
                        <Button
                          className="common-pointer cursor-pointer font-semibold text-base text-center w-full"
                          onClick={() => navigate("/reservar")}
                          shape="round"
                          color="blue_800"
                          size="md"
                          variant="fill"
                        >
                          Reservar
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
    </>
  );
};

export default PropertyDetailsPage;
