
describe("The calculation for", function(){

        it("Should retain the current value of all time", function(){
            expect(Calculator.currentVal).toBeDefined();
            // expect(Calculator.currentVal).toEqual(0);
        });
    
        it("add function tested", function(){
           expect(Calculator.add(5)).toEqual(5);
        //    expect(Calculator.add(10)).toEqual(15);
           
        });

        it("addAny function tested", function(){
            expect(Calculator.addAny(1, 2, 3)).toEqual(11);
        });
    })
  