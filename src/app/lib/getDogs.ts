import { BASE_URL } from "@/constants";

export async function getAllDogs() {
    try {
        const res = await fetch(`${BASE_URL}/breeds/list/all`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        
        return res.json();
    } catch (error) {
        console.error('Error fetching all dogs:', error);
        throw error;
    }
}

export async function getDogImage(name: string) {
    try {
        const res = await fetch(`${BASE_URL}/breed/${name}/images/random`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (error) {
        console.error(`Error fetching image for ${name}:`, error);
        throw error;
    }
}

export async function getAllDogsWithRandomImages(): Promise<{ breed: string, url: string }[]> {
    try {
        const data = await getAllDogs();
        const dogs = data.message;
        const dogBreeds = Object.keys(dogs);
        
        const dogImagesPromises = dogBreeds.map(async (dogBreed) => {
            try {
                const dogImageData = await getDogImage(dogBreed);
                const imgUrl = dogImageData.message;
                return { breed: dogBreed, url: imgUrl };
            } catch (error) {
                console.error(`Error fetching image for ${dogBreed}:`, error);
               
                return { breed: dogBreed, url: null };
            }
        });
        
        return Promise.all(dogImagesPromises);
    } catch (error) {
        console.error('Error fetching all dogs with random images:', error);
        throw error;
    }
}