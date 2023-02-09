export const validateISO = (code: string) => {
  const reg = new RegExp('^[a-zA-Z]{2,3}$');
  return reg.test(code);
};