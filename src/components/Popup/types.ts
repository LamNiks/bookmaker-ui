export interface PopupProps {
  title?: string;
  TitleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  className?: string;
  show: boolean;
  onClose?: () => void;
}
