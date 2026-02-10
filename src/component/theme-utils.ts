// Theme-aware class name utilities
export const getTextClass = (
  theme: boolean,
  darkClass: string = "text-white",
  lightClass: string = "text-gray-900",
) => {
  return theme ? lightClass : darkClass;
};

export const getLabelClass = (theme: boolean) => {
  return theme ? "text-gray-700" : "text-gray-300";
};

export const getInputClass = (theme: boolean) => {
  return theme
    ? "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 hover:bg-gray-100"
    : "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-transparent hover:bg-white/15";
};

export const getCardClass = (theme: boolean) => {
  return theme
    ? "bg-white/90 border-gray-200 shadow-md hover:shadow-lg"
    : "bg-white/5 border-white/10 shadow-lg hover:shadow-xl";
};

export const getSectionTitleClass = (theme: boolean) => {
  return theme ? "text-gray-900" : "text-white";
};

export const getSectionOptionClass = (theme: boolean) => {
  return theme ? "bg-white/10" : "bg-gray-800";
};
