const binaryToDecimal = (binary: string) => {
  let dec = 0;
  for (let i = 0; i < binary.length; i++) {
    dec = dec + parseInt(binary[i]) * Math.pow(2, binary.length - 1 - i);
  }
  return dec.toString();
};

export default binaryToDecimal;
