// src/utils/ordersStorage.js

export function getOrders(userId) {
  try {
    return JSON.parse(localStorage.getItem(`orders_${userId}`)) || [];
  } catch { return []; }
}

export function saveOrder(userId, order) {
  const existing = getOrders(userId);
  const newOrder = {
    ...order,
    id: Date.now().toString(),
    date: new Date().toLocaleDateString("pl-PL"),
  };
  localStorage.setItem(`orders_${userId}`, JSON.stringify([newOrder, ...existing]));
  return newOrder;
}