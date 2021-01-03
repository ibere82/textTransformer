export function removeSpecialCharacters(text) {
  return text
    .replace(/[áàãâä]/gu, 'a')
    .replace(/[éèẽêë]/gu, 'e')
    .replace(/[íìĩîï]/gu, 'i')
    .replace(/[óòõôö]/gu, 'o')
    .replace(/[úùũûü]/gu, 'u')
    .replace(/[ÁÀÃÂÄ]/gu, 'A')
    .replace(/[ÉÈẼÊË]/gu, 'E')
    .replace(/[ÍÌĨÎÏ]/gu, 'I')
    .replace(/[ÓÒÕÔÖ]/gu, 'O')
    .replace(/[ÚÙŨÛÜ]/gu, 'U');
};

export function onlyOneSpace(text) {
  return text.trim()
    .split(' ')
    .filter(elem => elem !== "")
    .join(' ');
};