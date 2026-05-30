import { describe, it, expect } from "vitest";
import { skills, skillCategories, skillsByCategory } from "../data/skills";

describe("skills data", () => {
  it("every skill has name and category", () => {
    skills.forEach((s) => {
      expect(s.name).toBeTruthy();
      expect(s.category).toBeTruthy();
    });
  });

  it("skillCategories matches keys of skillsByCategory", () => {
    expect(skillCategories).toEqual(Object.keys(skillsByCategory));
  });

  it("skillsByCategory groups correctly", () => {
    const backendNames = skillsByCategory["backend"];
    const backendFromSkills = skills.filter((s) => s.category === "backend").map((s) => s.name);
    expect(backendNames).toEqual(backendFromSkills);
  });
});
