const publicURL = (path = "") => {
  return `${process.env.REACT_APP_MY_APP_URL}${path}`;
};
const apiUrl = (path = "") => {
  return `http://10.0.0.65:5000/api/${path}`;
};
const siteTitle = () => {
  return `${process.env.REACT_APP_MY_APP}`;
};

function removeHTMLAndLimitString(input, limit = false) {
  // Remove HTML tags using a regular expression
  var str = input.replace(/<[^>]+>/g, '');

  // Limit the string length
  if(limit !== false)
  str = str.slice(0, limit);

  return str;
}

export { siteTitle, apiUrl, publicURL,removeHTMLAndLimitString };
