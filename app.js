// Tento soubor obsahuje JavaScript kód pro práci s sessionStorage
// Je načítán v index.html a používán pro JS interop s Dart kódem

// Funkce se automaticky volají z Dart kódu pomocí JS interop

// Funkce pro uložení hodnoty do sessionStorage
function callJsSetSessionStorage(key, value) {
  try {
    window.sessionStorage.setItem(key, value);
    console.log(`Saved value to sessionStorage: ${key}=${value}`);
  } catch (e) {
    console.error('Error saving to sessionStorage:', e);
  }
}

// Funkce pro získání hodnoty ze sessionStorage
function callJsGetSessionStorage(key) {
  try {
    const value = window.sessionStorage.getItem(key);
    console.log(`Retrieved value from sessionStorage: ${key}=${value}`);
    return value;
  } catch (e) {
    console.error('Error retrieving from sessionStorage:', e);
    return null;
  }
}

// Funkce pro odstranění hodnoty ze sessionStorage
function callJsRemoveSessionStorage(key) {
  try {
    window.sessionStorage.removeItem(key);
    console.log(`Removed key from sessionStorage: ${key}`);
  } catch (e) {
    console.error('Error removing from sessionStorage:', e);
  }
}

// Funkce pro vyčištění celého sessionStorage
function callJsClearSessionStorage() {
  try {
    window.sessionStorage.clear();
    console.log('Cleared sessionStorage');
  } catch (e) {
    console.error('Error clearing sessionStorage:', e);
  }
}

// Automatické vymazání kódu při načtení stránky
window.onload = function() {
  try {
    console.log('Page loaded, clearing sessionStorage');
    window.sessionStorage.removeItem('access_code');
    window.sessionStorage.removeItem('daily_code');
  } catch (e) {
    console.error('Error clearing codes on page load:', e);
  }
};

// Zachycení události, když uživatel opustí stránku nebo obnoví prohlížeč
window.addEventListener('beforeunload', function() {
  try {
    console.log('Page unload/refresh detected, clearing sessionStorage');
    window.sessionStorage.removeItem('access_code');
    window.sessionStorage.removeItem('daily_code');
  } catch (e) {
    console.error('Error clearing codes on beforeunload:', e);
  }
}); 