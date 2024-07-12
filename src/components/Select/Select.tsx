import React from 'react';

interface Iselect {
  options: string[],
}

const Select: React.FC<Iselect> = ({ options }) => {
  return (
      <select>
        {options.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
  );
};

export default Select;