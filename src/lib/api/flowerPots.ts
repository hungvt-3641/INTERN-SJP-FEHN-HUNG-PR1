import type { FlowerPot } from "@/types";
import { API_BASE_URL } from "./config";

// GET /flowerPots
export async function getFlowerPots(params?: URLSearchParams): Promise<FlowerPot[]> {
  const url = `${API_BASE_URL}/flowerPots?${params?.toString() || ''}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch flower pots.');
  }
  return response.json();
}

// GET /flowerPots/:id
export async function getFlowerPotById(id: number): Promise<FlowerPot> {
  const response = await fetch(`${API_BASE_URL}/flowerPots/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch flower pot with id: ${id}`);
  }
  return response.json();
}
