import { FunctionComponent } from "react";

interface IconProps {
  width?: string;
  height?: string;
  viewBox?: string;
  color?: string;
  className?: string;
}

export const CloseIcon: FunctionComponent<IconProps> = ({
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
  color = "currentColor",
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={viewBox}
    fill={color}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM7.41085 7.41085C6.94222 7.87948 6.94222 8.63928 7.41085 9.10791L10.303 12L7.41086 14.8921C6.94224 15.3607 6.94224 16.1205 7.41086 16.5892C7.87949 17.0578 8.63929 17.0578 9.10792 16.5892L12 13.6971L14.8921 16.5892C15.3607 17.0578 16.1205 17.0578 16.5892 16.5892C17.0578 16.1205 17.0578 15.3607 16.5892 14.8921L13.6971 12L16.5892 9.10791C17.0578 8.63928 17.0578 7.87948 16.5892 7.41085C16.1205 6.94222 15.3607 6.94222 14.8921 7.41085L12 10.303L9.10791 7.41085C8.63928 6.94222 7.87948 6.94222 7.41085 7.41085Z"/>
  </svg>
);