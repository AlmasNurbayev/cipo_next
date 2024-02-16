export default function Button({
  onPress,
  active,
  width,
  height,
  margin,
  padding,
  children,
  value,
  style,
  type,
}: {
  onPress?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
  children?: React.ReactNode;
  width?: number;
  height?: number;
  margin?: number;
  padding?: number;
  value?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: React.CSSProperties;
}) {
  return (
    <button
      className={active ? 'Button ButtonActive' : 'Button'}
      onClick={onPress}
      style={{...style, width, height, margin, padding}}
      value={value}
      type={type ? type : 'button'}
    >
      {children}
    </button>
  );
}
