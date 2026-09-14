"use client";

import React, { useState } from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import { Language, KeyboardArrowDown } from "@mui/icons-material";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { customColor } from "@/utils/theme/customColor";

const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  hi: "हिन्दी",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

interface LanguageSwitcherProps {
  tone?: "light" | "dark";
  onNavigate?: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  tone = "light",
  onNavigate,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleSelect = (nextLocale: string) => {
    setAnchorEl(null);
    const query = typeof window !== "undefined" ? window.location.search : "";
    router.replace(`${pathname}${query}`, { locale: nextLocale });
    onNavigate?.();
  };

  const textColor = tone === "dark" ? "rgba(255,255,255,0.82)" : "#4a5754";
  const iconColor = tone === "dark" ? "#ffffff" : customColor.primary;

  return (
    <Box>
      <Box
        component="button"
        type="button"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        aria-haspopup="listbox"
        aria-expanded={open}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          color: textColor,
          fontSize: "0.8rem",
          fontWeight: 500,
          letterSpacing: "0.01em",
          fontFamily: "inherit",
          p: 0,
          "&:hover": { opacity: 0.8 },
        }}
      >
        <Language sx={{ fontSize: 16, color: iconColor }} />
        {LOCALE_NAMES[locale]}
        <KeyboardArrowDown
          sx={{
            fontSize: 16,
            transition: "transform .2s ease",
            transform: open ? "rotate(180deg)" : "none",
          }}
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        sx={{ zIndex: 10050 }}
      >
        {routing.locales.map((l) => (
          <MenuItem
            key={l}
            selected={l === locale}
            onClick={() => handleSelect(l)}
            sx={{ fontSize: "0.875rem", minWidth: 140 }}
          >
            {LOCALE_NAMES[l]}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
