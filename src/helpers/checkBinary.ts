const checkBinary = (value: string) => {
  return value.split("").every((n) => n === "0" || n === "1");
};

export default checkBinary;
