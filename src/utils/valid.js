export const validEng = (text) => {
  return /^[a-zA-Z]+$/.test(text);
};

export const validEmail = (text) => {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(text);
};

export const validPass = (text) => {
  return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(text);
};

export const validNumLength5 = (text) => {
  return /^[0-9]{5}$/.test(text);
};

export const validDecimal = (text) => {
  return /^(0|[1-9]\d*)$/.test(text);
};

export const validPhoneNumber = (phoneNumber) => {
  const thaiPhoneNumberPattern = /^(0|\+66)(\d{8,9})$/;
  return thaiPhoneNumberPattern.test(phoneNumber);
};

export const validThaiIdCard = (idCardNumber) => {
  const thaiIdCardPattern = /^[0-9]{13}$/;
  return thaiIdCardPattern.test(idCardNumber);
};

// ====================================
// ====================================
// ====================================
// ====================================

// export const valid_8_15_length = (text) => {
//   return /^[8,15]$/.test(text);
// };

// export const valid_eng_upper_lower_number = (text) => {
//   return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(text)
// };
