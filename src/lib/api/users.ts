import { User } from "@/types";
import { API_BASE_URL } from "./config";

// GET /users
export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${API_BASE_URL}/users`);

  if (!response.ok) {
    throw new Error('Failed to fetch users.');
  }
  return response.json();
}

// GET /users/:id
export async function getUserById(id: number): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch user with id: ${id}`);
  }
  return response.json();
}

// POST /users
export async function createUser(user: Omit<User, 'id'>): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error('Failed to create user.');
  }
  return response.json();
}

// PATCH /users/:id
export async function updateUser(id: number, data: Partial<User>): Promise<User> {  
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to update user with id: ${id}`);
  }
  return response.json();
}
