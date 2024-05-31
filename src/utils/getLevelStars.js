export function getLevelStars(level) {
  const totalStars = 5;
  const fullStars = '★'.repeat(level);
  const emptyStars = '☆'.repeat(totalStars - level);

  return fullStars + emptyStars;
}
