export type TempMode = "c" | "f";

export enum ScaleName {
  c = "Celsius",
  f = "Fahrenheit",
}

export const toCelsius = (fahrenheit: number): number =>
  (fahrenheit - 32) / 1.8;

export const toFahrenheit = (celsius: number): number => celsius * 1.8 + 32;

export const convertScale = (
  temp: string,
  callback: (value: number) => number
): number => {
  const input = parseFloat(temp);
  let output = callback(input);
  if (Number.isNaN(input)) {
    return 0;
  }

  output = Math.round(output * 1000) / 1000;
  return output;
};
