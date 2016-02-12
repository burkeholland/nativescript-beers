class Beer {
    name: string;
    description: string;
    alcohol: number;
    image: string;
    
    constructor(name: string, description: string, alcohol: number, image: string) {
        this.name = name;
        this.description = description;
        this.alcohol = alcohol;
        
        this.image = `http://beertutorials.github.io/website/${image}`; 
    }
}

export default Beer;