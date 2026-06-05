export function getReviews(productId) {
  try {
    return JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
  } catch { return []; }
}

export function addReview(productId, review) {
  const existing = getReviews(productId);
  const updated = [
    ...existing,
    {
      ...review,
      id: Date.now(),
      date: new Date().toLocaleDateString("pl-PL"),
    },
  ];
  localStorage.setItem(`reviews_${productId}`, JSON.stringify(updated));
}

// ← dodaj userId do klucza
export function hasReviewed(orderId, productId, userId) {
  try {
    const key = `reviewed_${userId}`;
    const reviewed = JSON.parse(localStorage.getItem(key)) || [];
    return reviewed.some(r => r.orderId === orderId && r.productId === productId);
  } catch { return false; }
}

export function markAsReviewed(orderId, productId, userId) {
  try {
    const key = `reviewed_${userId}`;
    const reviewed = JSON.parse(localStorage.getItem(key)) || [];
    reviewed.push({ orderId, productId });
    localStorage.setItem(key, JSON.stringify(reviewed));
  } catch {}
}

export function getProductRating(productId, defaultRating, defaultCount) {
  const userReviews = getReviews(productId);
  if (userReviews.length === 0) {
    return { rating: defaultRating, count: defaultCount };
  }
  const totalScore = defaultRating * defaultCount + userReviews.reduce((s, r) => s + r.rating, 0);
  const totalCount = defaultCount + userReviews.length;
  return {
    rating: Math.round((totalScore / totalCount) * 10) / 10,
    count: totalCount,
  };
}