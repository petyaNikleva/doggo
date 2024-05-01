import { BASE_URL } from "@/constants";

export default async function getBreedImages(breed: string) {
  try {
    const res = await fetch(`${BASE_URL}/breed/${breed}/images`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    const data = await res.json();
    return data.message;
  } catch (error) {
    console.error('Error fetching breed images:', error);
    throw error;
  }
}