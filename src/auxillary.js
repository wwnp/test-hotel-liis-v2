export function generateToken() {
  return Math.random().toString(36).substr(2)
};
export function checkDays(days) {
  if (days >= 5) {
    return 'дней'
  }
  if (days >= 2) {
    return 'дня'
  }
  return 'день'
}
