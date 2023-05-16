const str = "The Phoenix Guild is the best Women in Web3 Community";

// 1. length - returns the length of the string
console.log("Length:", str.length);

// 2. toUpperCase - converts the string to uppercase
console.log("Uppercase:", str.toUpperCase());

// 3. toLowerCase - converts the string to lowercase
console.log("Lowercase:", str.toLowerCase());

// 4. indexOf - returns the index of the first occurrence of a substring
console.log("Index of 'best':", str.indexOf("best"));

// 5. lastIndexOf - returns the index of the last occurrence of a substring
console.log("Last index of 'the':", str.lastIndexOf("the"));

// 6. slice - extracts a portion of the string
console.log("Slice:", str.slice(4, 11));

// 7. substr - extracts a substring starting from a specified position
console.log("Substr:", str.substr(13, 7));

// 8. replace - replaces a substring with another substring
console.log("Replace:", str.replace("Women", "Men"));

// 9. split - splits the string into an array of substrings
console.log("Split:", str.split(" "));

// 10. trim - removes whitespace from both ends of the string
console.log("Trim:", str.trim());

// 11. charAt - returns the character at a specified position
console.log("Character at index 7:", str.charAt(7));

// 12. concat - concatenates two or more strings
console.log("Concat:", str.concat(" - Join us!"));

// 13. includes - checks if a substring exists within the string
console.log("Includes 'Guild':", str.includes("Guild"));

// 14. startsWith - checks if the string starts with a specified substring
console.log("Starts with 'The':", str.startsWith("The"));

// 15. endsWith - checks if the string ends with a specified substring
console.log("Ends with 'Community':", str.endsWith("Community"));
