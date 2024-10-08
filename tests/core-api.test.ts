import fetchMock from 'fetch-mock';
import CoreAPI from '../src/CoreAPI';

describe('CoreAPI', () => {
    let api: CoreAPI;
    const baseURL = 'http://localhost:8000/api/core-api';
    
    api = new CoreAPI(baseURL);

    it('should get resources successfully', async () => {


        const result = await api.getResources('systems');

        result.resources.forEach(resource => {
            expect(resource).toHaveProperty('kind');
            expect(resource).toHaveProperty('apiVersion');
            expect(resource).toHaveProperty('metadata');
            expect(resource).toHaveProperty('spec');
        });

        
    });



});
