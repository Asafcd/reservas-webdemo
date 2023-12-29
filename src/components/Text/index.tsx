import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtManropeExtraBold28: "font-extrabold font-manrope",
  txtRalewayBold20: "font-bold font-raleway",
  txtPoppinsRegular28: "font-normal font-poppins",
  txtPoppinsSemiBold18Gray900: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterRegular8: "font-inter font-normal",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtInterRegular12Gray50: "font-inter font-normal",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtManropeSemiBold20: "font-manrope font-semibold",
  txtPoppinsSemiBold20Gray900: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtInterMedium16: "font-inter font-medium",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtRubikRegular18: "font-normal font-rubik",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtManropeMedium16: "font-manrope font-medium",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtInterRegular12: "font-inter font-normal",
  txtPoppinsMedium28: "font-medium font-poppins",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
