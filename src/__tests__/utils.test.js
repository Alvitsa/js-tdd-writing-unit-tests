import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  // Basic functionality
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    expect(pointsForWord("test")).toBe(7); // t(2) + e(1) + s(2) + t(2) = 7
  });

  // Handles uppercase and lowercase input
  it("handles uppercase and lowercase input", () => {
    expect(pointsForWord("tEsT")).toBe(7); // Same as "test", case-insensitive
  });

  // Empty string input
  it("returns 0 for an empty string", () => {
    expect(pointsForWord("")).toBe(0); // No letters to score
  });

  // Ignores non-alphabetic characters
  it("ignores non-alphabetic characters", () => {
    expect(pointsForWord("t3s@t!")).toBe(7); // t(2) + s(2) + t(2) + e(1)
  });

  // Invalid input types
  it("throws an error for non-string input", () => {
    expect(() => pointsForWord(123)).toThrow("Input must be a string");
    expect(() => pointsForWord(null)).toThrow("Input must be a string");
    expect(() => pointsForWord(undefined)).toThrow("Input must be a string");
  });

  // Words with only vowels
  it("correctly calculates points for words with only vowels", () => {
    expect(pointsForWord("aeiou")).toBe(5); // Each vowel = 1 point
  });

  // Words with only consonants
  it("correctly calculates points for words with only consonants", () => {
    expect(pointsForWord("bcdfg")).toBe(10); // Each consonant = 2 points
  });

  // Mixed characters (e.g., spaces, punctuation)
  it("ignores spaces and punctuation", () => {
    expect(pointsForWord("h e l l o!")).toBe(8); // h(2) + e(1) + l(2) + l(2) + o(1)
  });
});
