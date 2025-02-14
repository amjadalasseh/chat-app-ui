export const theme = {
  colors: {
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-700",
      muted: "text-gray-500",
      green: "text-green-600",
      link: "text-green-600 hover:underline",
      header: "text-stone-50",
      red: "text-red-600",
    },
    background: {
      primary: "bg-green-600",
      secondary: "bg-green-500",
      overlay: "bg-gray-50",
      card: "bg-white",
      danger: "bg-red-600",
      muted: "bg-gray-100",
      custom: "bg-cover bg-center bg-no-repeat",
    },
    border: {
      default: "border border-gray-300",
      focus: "focus:ring-2 focus:ring-green-500 focus:border-green-600",
    },
  },

  backgroundImage: {
    helpPage: "bg-help-page",
  },

  spacing: {
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
  },

  button: {
    base: "py-2 px-4  rounded-full focus:ring-2 focus:outline-none",
    variants: {
      primary: "bg-green-600 text-white hover:bg-green-700 ",
      secondary: "bg-gray-500 text-white hover:bg-gray-600 ",
      danger: "bg-red-600 text-white hover:bg-red-700 ",
      link: "text-green-600 underline hover:text-green-700 ",
      outlineprimary: `border border-green-600 text-green-600 hover:bg-green-100 `,
      outlinesecondary: `border border-gray-500 text-gray-500 hover:bg-gray-100 `,
      outlinedanger: `border border-red-600 text-red-600 hover:bg-red-100 `,
    },
  },

  input: {
    base: "border border-gray-300 w-full p-2 shadow-sm",
    rounded: {
      full: "rounded-full",
      left: "rounded-s-full",
      right: "rounded-r-full",
    },
  },

  card: {
    base: "shadow-md p-4 rounded-lg bg-white",
    hover: "hover:shadow-lg",
  },

  heights: {
    sm: {
      min: "min-h-[100px]",
      max: "max-h-[200px]",
      h: "h-[150px]",
    },
    md: {
      min: "min-h-[200px]",
      max: "max-h-[300px]",
      h: "h-[250px]",
    },
    lg: {
      min: "min-h-[300px]",
      max: "max-h-[400px]",
      h: "h-[350px]",
    },
    xl: {
      min: "min-h-[400px]",
      max: "max-h-[500px]",
      h: "h-[450px]",
    },
    fit: "h-fit",
  },

  width: {
    fitcontent: "w-fit",
  },

  errorPage: {
    title: "text-4xl font-bold text-error",
    subtitle: "text-lg text-textSecondary mt-2",
    container: "flex flex-col items-center justify-center h-screen bg-error",
    button:
      "mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg",
  },
};
