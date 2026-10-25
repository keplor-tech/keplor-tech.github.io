import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { keplor: { ink: "#050507", purple: "#36006D", violet: "#A78BFA" } } } },
  plugins: []
};
export default config;
