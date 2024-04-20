import { FieldValues, RegisterOptions } from "react-hook-form";

export type InputValiation = Omit<
  RegisterOptions<FieldValues, string>,
  "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
>;
