export class Service {
    private baseUrl = 'http://localhost:3001/';

    public getData = async () => {
        let response = await fetch(this.baseUrl);
        if (response.ok && response.status === 200) {
            return await response.json()
        }
        return response.json()
    }
}