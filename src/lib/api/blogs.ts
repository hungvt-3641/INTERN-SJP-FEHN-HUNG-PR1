import type { Blog } from "@/types";
import { API_BASE_URL } from "./config";

// GET /blogs
export async function getBlogs(): Promise<Blog[]> {
  const response = await fetch(`${API_BASE_URL}/blogs`);

  if (!response.ok) {
    throw new Error('Failed to fetch blogs.');
  }
  return response.json();
}

// GET /blogs/:id
export async function getBlogById(id: number): Promise<Blog> {
  const response = await fetch(`${API_BASE_URL}/blogs/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch blog with id: ${id}`);
  }
  return response.json();
}

// POST /blogs
export async function createBlog(blog: Omit<Blog, 'id' | 'createdAt'>): Promise<Blog> {
  const response = await fetch(`${API_BASE_URL}/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blog),
  });

  if (!response.ok) {
    throw new Error('Failed to create blog.');
  }
  return response.json();
}
