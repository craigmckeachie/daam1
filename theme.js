import { Platform } from "react-native";
const palette = {
  grey50: "#F9FAFB",
  grey100: "#F3F4F6",
  grey200: "#E5E7EB",
  grey400: "#9CA3AF",
  grey500: "#6B7280",
  grey600: "#4B5563",
  grey900: "#111827"
};

const colors = {
  mainLight: palette.grey50,
  mainDark: palette.grey600,
  altLight: palette.grey100,
  altDark: palette.grey500
};

const spacing = {
  s: 5,
  m: 10,
  l: 20,
  xl: 30,
  xxl: 50
};

const text = {
  headline: {
    fontWeight: "bold",
    fontSize: 32,
    color: colors.mainDark
  },
  title: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: spacing.l,
    marginBottom: spacing.l,
    color: colors.mainDark
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: spacing.m,
    color: colors.mainDark
  },
  normal: {
    fontSize: 16,
    padding: spacing.s,
    color: colors.altDark
  },
  note: {
    fontSize: 14,
    padding: spacing.s,
    color: colors.altDark
  },
  input: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    borderColor: colors.altDark,
    borderBottomWidth: 1,
    borderWidth: 1,
    minHeight: spacing.xxl,
    marginBottom: spacing.m,
    marginTop: spacing.m,
    padding: spacing.s
  }
};

export const theme = {
  colors,
  text,
  spacing
};
