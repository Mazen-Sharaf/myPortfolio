export function calculateAge(birthDate: Date, today = new Date()): number {
  return (
    today.getFullYear() -
    birthDate.getFullYear() -
    (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
      ? 1
      : 0)
  );
}
