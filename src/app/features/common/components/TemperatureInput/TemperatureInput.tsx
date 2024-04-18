import { ChangeEvent } from "react";

export type TemperatureInputProps = {
  title: string;
  temp: string;
  onTempChange: (value: string) => void;
};

export const TemperatureInput = ({
  title,
  temp,
  onTempChange,
}: TemperatureInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onTempChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperator in {title}</legend>
      <input type="text" value={temp} onChange={handleChange} />
    </fieldset>
  );
};
