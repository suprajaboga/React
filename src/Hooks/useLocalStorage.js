import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const localStorageValue = localStorage.getItem(key);
  // console.log(localStorageValue);

  //initial value of localStorage
  const [localStoragee, setLocalStoragee] = useState(
    localStorageValue ? JSON.parse(localStorageValue) : null
  );

  useEffect(() => {
    if (localStorageValue) {
      setLocalStoragee(JSON.parse(localStorageValue));
    } else setLocalStoragee(null);
  }, [localStorageValue]);

  //set value in localStorage
  const setLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log("setLocalStorage called");
  };

  //clear value in localStorage
  const clearLocalStorage = () => {
    // console.log("clearLocalStorage called");
    localStorage.clear();
  };

  return [localStoragee, setLocalStorage, clearLocalStorage];
};

export default useLocalStorage;
