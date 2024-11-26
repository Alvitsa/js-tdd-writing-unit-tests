/**
 * Calculates the total points for a given word.
 * Vowels (a, e, i, o, u) = 1 point each.
 * Consonants = 2 points each.
 * 
 * @param {string} word - The word to calculate points for.
 * @returns {number} - The total points for the word.
 * @throws {Error} - If the input is not a string.
 */
export function pointsForWord(word) {
    // Validate that the input is a string
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
  
    let points = 0; // Initialize points to 0
  
    // Iterate over each character in the input word
    for (const char of word) {
      // Check if the character is alphabetic
      if (/[a-z]/i.test(char)) {
        // If the character is a vowel, add 1 point; otherwise, add 2 points
        points += /[aeiou]/i.test(char) ? 1 : 2;
      }
    }
  
    return points; // Return the total points
  }