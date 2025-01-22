interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Father implements Greetable{
    // id: string;
    // name: string;
    readonly name?: string; // Satisfy the 'name' property from the Named interface

    private bag: string[] = [];

    constructor(private readonly id: string, name?: string) {
        if(name) {
            this.name = name;
        }
    }

    describe(this: Father) {
        console.log('this.name ', this.name);
    }
    addToBag(item: string) {
        this.bag.push(item);
    }
    printBag(){
        console.log(this.bag);
    }
    greet(phrase: string){
        console.log('hello, ', phrase);
    }

}

const xol = new Father('508','pancho508');
console.log('console log xol.describe -=>', xol.describe())
xol.describe()
xol.addToBag('smt 4')
// xol.bag[1] = 'doom'
xol.printBag()

class Son extends Father {
    private play: string[] = [];
    constructor(id: string, name: string, games: string[]) {
        super(id, name);
        this.play = games
    }
}

const xolSon = new Son('4','panchito', ['marioKart']);
console.log('console log xolSon -=>', xolSon)

class Doughter extends Father {
    private chores: string[] = [];
    constructor(id: string, name: string) {
        super(id, name);
    }
    addChores(chore: string) {
        this.chores.push(chore);
    }
    removeChores(chore: string) {
        this.chores = this.chores.filter(c => c !== chore);
    }
}

const xochil = new Doughter('4','xochil');   
xochil.addChores('clean room');
xochil.addChores('clean dishes');
xochil.removeChores('clean room');
console.log('console log xochil -=>', xochil)

const noName = new Father('4');
console.log('console log noName -=>', noName)   