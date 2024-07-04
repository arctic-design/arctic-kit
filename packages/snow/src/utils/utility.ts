export function toHumanReadable(str: string): string {
  // Check if the string contains underscores, indicating snake_case
  if (str.includes('_')) {
    return str
      .split('_') // Split by underscore
      .map(capitalizeFirstLetter) // Capitalize the first letter of each word
      .join(' '); // Join with a space
  } else {
    // Handle camelCase by inserting a space before capital letters and splitting
    return (
      str
        // Replace capital letters with space + letter
        .replace(/([A-Z])/g, ' $1')
        // Trim any leading space and capitalize the first letter of each word
        .trim()
        .split(/\s+/) // Split by space
        .map(capitalizeFirstLetter) // Capitalize the first letter of each word
        .join(' ')
    ); // Join with a space
  }
}

export function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
