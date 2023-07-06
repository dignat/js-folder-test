//async iterators

class usersList {
    private ids: [];

    constructor(ids: []) {
        this.ids = ids;
    }

     [Symbol.asyncIterator]() {
        let i = 0;
        const next = async() => {
            const done = i >= this.ids.length;
            const id = this.ids[i++];
            const user = await fetchUser(id)
            return {
                done, value: done ? undefined: user
            }
        }
        return {next}
    }
}
const users = [
    {id: '1', name: 'Eliz'},
    {id: '2', name: 'Elizka'},
    {id: '3', name: 'Elizichka'},
]
 const fetchUser = async (id: string) => new Promise(resolve => {
   
        resolve(users.find(user => user.id === id));
  
    
 })