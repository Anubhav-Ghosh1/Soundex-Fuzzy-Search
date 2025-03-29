const soundex_code = async (string: String) => {
  const soundexTable: Record<string, string> = {
    A: "",
    E: "",
    I: "",
    O: "",
    U: "",
    Y: "",
    H: "",
    W: "",
    B: "1",
    F: "1",
    P: "1",
    V: "1",
    C: "2",
    G: "2",
    J: "2",
    K: "2",
    Q: "2",
    S: "2",
    X: "2",
    Z: "2",
    D: "3",
    T: "3",
    L: "4",
    M: "5",
    N: "5",
    R: "6",
  };

  if (string.length === 0) {
    return "";
  }

  const str = string.toUpperCase();
  const firstLetter = str.charAt(0);
  let encodedString = firstLetter;

  for (let i = 1; i < str.length; i++) {
    const currentLetter = str.charAt(i);
    const currentCode = soundexTable[currentLetter];
    const previousCode = soundexTable[str.charAt(i - 1)];

    if (currentCode !== previousCode) {
      encodedString += currentCode;
    }
  }

  return encodedString.padEnd(4, "0").slice(0, 4);
};

export default soundex_code;
