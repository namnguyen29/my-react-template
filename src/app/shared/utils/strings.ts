export const formatTitleCase = (value: string): string => {
  return value.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (match) => match.toUpperCase());
};
