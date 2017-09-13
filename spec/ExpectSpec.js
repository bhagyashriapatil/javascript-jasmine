// describe: group of tests together
// it block: where you write your tests
// we can write multiple describe() inside describe()
// expect: for validation check and confirmation
 
// Hooks: Automatically run when you run test
//        used for test setup and cleaning data
// beforeAll: run only once befre all test
// beforeEach: run each time any given test
// afterAll: run only once after all test 
// afterEach: run after each test 

// Specs: describe takes a string and a function.
//  The string is the title of the spec and the function is the spec, or test.

describe("calculate addition", function(){
    
        // expect start
        // craete instance of class
        var calculate = new Calculator();
        it("Should be able to add two numbers together", function(){
            // console.log("I was able to add two number together");
            // console.log(calculate.add(1,3));   //op 4
            expect(calculate.add(1,3)).toBe(4);   
            // expect(calculate.add(1,3)).not.toBe(4);  //Expected 4 not to be 4.
    
            // expect(calculate.add(1,3)).toEqual(6);  //Expected 4 to equal 6.
    
            // expect(calculate.add(1,3)).toBeLessThan(2);  //Expected 4 to be less than 2.
            // expect(calculate.add(1,3)).toBeGreaterThan(3);
            // expect(calculate.add(1,3)).not.toBeLessThan(3);
            // expect(calculate.add(1,3)).not.toBeGreaterThan(5);
        });
        // object instantiation
        it("Should be able to declare the Calculator class", function(){
            // expect(calculate).toBeDefined();
            // expect(calculate).not.toBeUndefined();
            expect(calculate).not.toBeNull();
        })
    
        it("should be able to check the description of the class", function(){
            expect(calculate.description).toMatch('class');
            // expect(calculate.description).toContain('calculator');
        })
        //expect end
        
    
        it("Should be able to add two numbers together", function(){
            // console.log("I was able to add three number together");
            // console.log(calculate.add(5,4));   //op 1
            // expect(calculate.minus(5,4)).tobe(1);
        });
    
        describe("calculate addition with minus number", function(){
    
            it("It should be able to add -2 and -2", function(){
                console.log("Just added two minus number together");
            })
        })
    
    });

    