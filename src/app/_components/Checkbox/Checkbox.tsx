import React from 'react';
import './Checkbox.css';

export default function Checkbox({
  label,
  checked,
  value,
  onPress,
}: {
  label: string;
  checked: boolean;
  value: any;
  onPress: (value: any) => void;
}) {
  return (
    <div className="Checkbox" onClick={() => onPress(value)} >
      <input type="checkbox" value={value} checked={checked} className="input" />
      <label className="label">{label}</label>
    </div>
  );
}
