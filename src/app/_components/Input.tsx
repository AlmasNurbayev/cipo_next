import React from 'react';

export default function Input({
  onTyped,
  name,
  type,
  value,
  width,
  height,
  margin,
  padding,
  placeholder
}: {
  onTyped: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  type: string;
  value: any;
  width?: number;
  height?: number;
  margin?: number;
  padding?: number;
}) {
  return (
    <input
      className={'Input'}
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      style={{ width, height, margin, padding }}
      onChange={onTyped}
    >
      {/* <button>X</button> */}
    </input>
  );
}
