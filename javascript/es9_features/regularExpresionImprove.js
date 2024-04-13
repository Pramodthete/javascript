// Sample date string
const dateString = '2024-04-11';

// Regular expression pattern to match YYYY-MM-DD format
const regex = /^(\d{4})-(\d{2})-(\d{2})$/;

// Use exec() method to match the date string against the regex pattern
const match = regex.exec(dateString);

// Check if the date string matches the expected format
if (match) {
    // Extract matched parts (year, month, day)
    const year = match[1];
    const month = match[2];
    const day = match[3];

    console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
} else {
    console.log('Invalid date format');
}
