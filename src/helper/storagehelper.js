export const setItem = (key, value) => {
    sessionStorage.setItem(key, value);
  };
  
  export const getItem = (key) => {
    return sessionStorage.getItem(key);
  };
  
  export const getItemAsObject = (key) => {
    const value = getItem(key);
    if (value) return JSON.parse(value);
  };
  