describe("Spies", function(){

    it("Should spy on save", function(){
        // var spy = spyOn(myObj, 'save');
        // myObj.save();
        // expect(spy).toHaveBeenCalled();
    })

    it("Should spy on getQuantity", function(){
        var spy = spyOn(myObj, 'getQuantity').andReturn(10);
        expect(myObj.getQuantity()).toEqual(10);
    })

    it("", function(){
        // var
    })

})

