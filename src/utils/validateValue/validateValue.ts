export const validateValue = (value: number): boolean => {
  if (value < 0 || value > 180) {
    return false;
  }

  return true;
}