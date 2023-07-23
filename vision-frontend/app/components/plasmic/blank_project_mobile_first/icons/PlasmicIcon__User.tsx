// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserIcon(props: UserIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 22"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.5 5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM.751 19.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 019 21.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UserIcon;
/* prettier-ignore-end */
