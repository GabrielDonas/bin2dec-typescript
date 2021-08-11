const checkBinary = (value: string) => {
  const isBinary = value.split("").every((n) => n === "0" || n === "1");
  if (Number(value) < 0 || !isBinary) {
    return false;
  } else {
    return value;
  }
};

export default checkBinary;
