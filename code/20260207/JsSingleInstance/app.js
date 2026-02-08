class MyClass {


    static _generator = (async function* () {
        while (true) {
            if (!MyClass._instance) {
                await new Promise(resolve => setTimeout(resolve, 1));
                MyClass._instance = new MyClass();
            }
            yield MyClass._instance;
        }
    })();

    static async getInstance() {
        return (await MyClass._generator.next()).value;
    }

    constructor() {
        console.log("Instance created");
    }

}


for (let i = 0; i < 10; i++) {
    MyClass.getInstance();
}