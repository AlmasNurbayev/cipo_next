import React, { useRef } from 'react';
import './Checkbox.css';

export default function Checkbox({
  label,
  checked,
  value,
  onPress,
}: {
  label: string;
  checked: boolean;
  value: string;
  onPress: (value: any) => void;
}) {

  return (
    <div className="Checkbox" data-value={value}>
      <label className="label" data-value={value}>
      <input type="checkbox" onChange={onPress} value={value} checked={checked}  className="input" />
      {label}
      </label>

    </div>
  );
}
