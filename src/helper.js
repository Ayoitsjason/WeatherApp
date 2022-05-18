// Checks Whether object exists
// input: (obj)
// output: true || false
// Used inside - weather.js
export const checkObjSize = (obj) => {
  return Object.entries(obj).length === 0 ? true : false;
};

// Gets the character at position 32, 33, and 34 and returns strings
// input: (string)
// output: string
// Used inside - weather.js
export const getErrorCode = (error) => {
  if (error) {
    return error.charAt(32) + error.charAt(33) + error.charAt(34);
  } else {
    return "";
  }
};

// Checks what error code means
// input: (string)
// output: string
// Used inside - weather.js
export const checkErrorCodeMeaning = (errCode) => {
  let string = "";
  if (errCode === "404") {
    string = "Invalid Input";
  }
  return string;
};
