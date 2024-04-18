export type BoilingVerdictProps = {
  celsius: number;
};

export const BoilingVerdict = ({ celsius }: BoilingVerdictProps) => {
  return (
    <div>
      {celsius >= 100 ? "The water would boil" : "The water would not boil"}
    </div>
  );
};
