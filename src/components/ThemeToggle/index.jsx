import { useTheme } from "../../context/ThemeContext";
import "./styles.css";

/**
 * The ThemeToggle component provides a user interface element that allows users to switch between light and dark themes on the portfolio website. 
 * It utilizes the useTheme hook from the ThemeContext to access the current theme and toggle function. 
 * The component displays an appropriate icon (sun for light mode and moon for dark mode) based on the current theme, and includes accessible labels for screen readers.
 */
export default function ThemeToggle() {
  // Get current theme and toggle function from ThemeContext
  const { theme, toggle } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
