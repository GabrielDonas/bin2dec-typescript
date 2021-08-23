const checkBinary = (value: string) => {
  const isBinary = value.split("").every((n) => n === "0" || n === "1");
  return !(Number(value) < 0 || !isBinary);
};

export default checkBinary;
