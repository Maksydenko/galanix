interface IHandleClassName {
  (
    isActive: boolean,
    className: string,
    modifier?: string,
    onlyModifier?: boolean
  ): string;
}

export const handleClassName: IHandleClassName = (
  isActive,
  className,
  modifier = "active",
  onlyModifier
) => {
  const defaultClassName = onlyModifier ? "" : className;
  const splitter = isActive ? (onlyModifier ? "" : " ") : "";
  const modifiedClassName = isActive ? `${className}_${modifier}` : "";

  return defaultClassName + splitter + modifiedClassName;
};
