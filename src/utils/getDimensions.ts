export const getDimension = ({width, height}: {width?: number, height?: number}) => ({
  ...(width && { width: `${width}px` }),
  ...(height && { height: `${height}px` }),
});