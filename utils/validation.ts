export function isValidPhoneNumber(phoneNumber: string) {
  const phoneNumberPattern = /^(\+62)8[1-9][0-9]{6,9}$/;
  return phoneNumberPattern.test(phoneNumber);
}
