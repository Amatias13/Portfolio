import { describe, it, expect } from "vitest";
import { useTranslation } from "../i18n/translations";

describe("useTranslation", () => {
  it("returns English translations", () => {
    const tr = useTranslation("en");
    expect(tr.nav.about).toBeDefined();
    expect(typeof tr.nav.about).toBe("string");
  });

  it("returns Portuguese translations", () => {
    const tr = useTranslation("pt");
    expect(tr.nav.about).toBeDefined();
    expect(tr.nav.about).not.toBe(useTranslation("en").nav.about);
  });

  it("falls back to Portuguese for unknown lang", () => {
    const tr = useTranslation("xx");
    const pt = useTranslation("pt");
    expect(tr.nav.about).toBe(pt.nav.about);
  });
});
