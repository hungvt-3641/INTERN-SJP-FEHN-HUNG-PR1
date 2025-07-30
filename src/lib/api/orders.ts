import type { Order } from "@/types";
import { API_BASE_URL } from "./config";

// GET /orders
export async function getOrdersByUserId(userId: number): Promise<Order[]> {
  const response = await fetch(`${API_BASE_URL}/orders?userId=${userId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch orders.');
  }
  return response.json();
}

// GET /orders/:id
export async function updateOrder(orderId: number, data: Partial<Order>): Promise<Order> {
  const response = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update order.');
  }
  return response.json();
}

// POST /orders
export async function createOrder(order: Omit<Order, 'id'>): Promise<Order> {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    throw new Error('Failed to create order.');
  }
  return response.json();
}
