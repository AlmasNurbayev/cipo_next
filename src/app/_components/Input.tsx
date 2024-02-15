export default function Input({
  onTyped,
  name,
  type,
  value,
  width,
  height,
  margin,
  padding,
  placeholder,
  style,
}: {
  onTyped?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  type: string;
  value?: any;
  width?: number;
  height?: number;
  margin?: number;
  padding?: number;
  style?: React.CSSProperties;
}) {
  return (
    
      <input
        className='Input_wrapper' style={{...style, width, height, margin, padding }}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}

        onChange={onTyped}
      />
    
  );
}
