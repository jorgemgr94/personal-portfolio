import { useState } from "react";

export const useLocalStorage = (key: string, defaultValue: any) => {
  // Creamos una función para obtener el valor inicial
  const getInitialValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return defaultValue;
    }
  };

  // Estado con el valor inicial del localStorage o el defaultValue
  const [storedValue, setStoredValue] = useState(getInitialValue);

  // Función para actualizar tanto el estado como localStorage
  const setValue = (value: any) => {
    try {
      // Permitimos que value sea una función como en useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};