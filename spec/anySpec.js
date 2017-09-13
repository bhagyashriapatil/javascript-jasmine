describe("Different Methods of Expect Block",function (){ 
    it("Example of any()", function(){ 
     expect(addAny(9,9)).toEqual(jasmine.any(Number)); 
    });    
});