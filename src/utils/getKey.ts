interface FieldMaps {
  [key: string]: string;
}

const getKeyByValue = (object: FieldMaps, value: string) => {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return '';
}

export default getKeyByValue;