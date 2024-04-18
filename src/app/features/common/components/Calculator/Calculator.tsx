import { useState } from "react";

import clsx from "clsx";

import styles from "./Calculator.module.scss";
import {
  BoilingVerdict,
  TemperatureInput,
} from "@app-features/common/components";
import {
  ScaleName,
  TempMode,
  convertScale,
  toCelsius,
  toFahrenheit,
} from "./CalculatorUtils";

export const Calculator = () => {
  const [temp, setTemp] = useState("");
  const [scale, setScale] = useState<TempMode>("c");
  const celsius = `${scale === "f" ? convertScale(temp, toCelsius) : temp}`;
  const fahrenheit = `${
    scale === "c" ? convertScale(temp, toFahrenheit) : temp
  }`;

  const handleTempChange = (scale: TempMode) => (value: string) => {
    setTemp(value);
    setScale(scale);
  };

  return (
    <div className={clsx(styles.calculatorWrapper)}>
      <TemperatureInput
        title={ScaleName.c}
        temp={celsius}
        onTempChange={handleTempChange("c")}
      />

      <TemperatureInput
        title={ScaleName.f}
        temp={fahrenheit}
        onTempChange={handleTempChange("f")}
      />

      <BoilingVerdict celsius={Number(celsius)} />
    </div>
  );
};
