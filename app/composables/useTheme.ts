export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

function applyToDocument(value: Theme) {
  document.documentElement.dataset.theme = value;
  const color = value === "dark" ? "#12100e" : "#fbf9f6";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", color);
}

export function useTheme() {
  const theme = useState<Theme>("theme", () => "light");

  const apply = (value: Theme) => {
    theme.value = value;
    if (!import.meta.client) return;
    localStorage.setItem(STORAGE_KEY, value);
    applyToDocument(value);
  };

  const toggle = () => apply(theme.value === "dark" ? "light" : "dark");

  onMounted(() => {
    apply(readStoredTheme() ?? systemTheme());
  });

  return { theme, toggle, apply };
}
