// Define types for the resource and error responses
interface Resource {
    [key: string]: any;
}

interface ResourceResponse {
    resources: Resource[];
}

interface APIError {
    detail: string;
}

// Define the CoreAPI class
class CoreAPI {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    // POST: Create a resource
    async postResource(resource: Resource): Promise<Resource> {
        try {
            const response = await fetch(`${this.baseURL}/resource/v1/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resource),
            });

            if (!response.ok) {
                const errorData: APIError = await response.json();
                throw new Error(errorData.detail || 'Failed to post resource');
            }

            const data: Resource = await response.json();
            return data;
        } catch (error) {
            console.error('Error posting resource:', error);
            throw error;
        }
    }

    // GET: Fetch all resources of a certain type
    async getResources(type: string): Promise<Resource[]> {
        try {
            const response = await fetch(`${this.baseURL}/resource/v1/${type}`, {
                method: 'GET',
            });

            if (!response.ok) {
                const errorData: APIError = await response.json();
                throw new Error(errorData.detail || 'Failed to fetch resources');
            }

            const data: ResourceResponse = await response.json();
            const resources: Resource[] = data.resources;
            return resources;
        } catch (error) {
            console.error('Error fetching resources:', error);
            throw error;
        }
    }

    // GET: Fetch a specific resource by type and name
    async getResource(type: string, name: string): Promise<Resource> {
        try {
            const response = await fetch(`${this.baseURL}/resource/v1/${type}/${name}`, {
                method: 'GET',
            });

            if (!response.ok) {
                const errorData: APIError = await response.json();
                throw new Error(errorData.detail || 'Failed to fetch resource');
            }

            const data: Resource = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching resource:', error);
            throw error;
        }
    }

    // DELETE: Delete a resource by type and name
    async deleteResource(type: string, name: string): Promise<void> {
        try {
            const response = await fetch(`${this.baseURL}/resource/v1/${type}/${name}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData: APIError = await response.json();
                throw new Error(errorData.detail || 'Failed to delete resource');
            }
        } catch (error) {
            console.error('Error deleting resource:', error);
            throw error;
        }
    }

    // PUT: Update a resource
    async putResource(resource: Resource): Promise<Resource> {
        try {
            const response = await fetch(`${this.baseURL}/resource/v1/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resource),
            });

            if (!response.ok) {
                const errorData: APIError = await response.json();
                throw new Error(errorData.detail || 'Failed to update resource');
            }

            const data: Resource = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating resource:', error);
            throw error;
        }
    }

    // PATCH: Partially update a resource
    async patchResource(type: string, name: string, updates: Partial<Resource>): Promise<Resource> {
        try {
            const response = await fetch(`${this.baseURL}/resource/v1/${type}/${name}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updates),
            });

            if (!response.ok) {
                const errorData: APIError = await response.json();
                throw new Error(errorData.detail || 'Failed to patch resource');
            }

            const data: Resource = await response.json();
            return data;
        } catch (error) {
            console.error('Error patching resource:', error);
            throw error;
        }
    }
}

export default CoreAPI;
