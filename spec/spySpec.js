describe("test for spy", function(){
    

    it("called to dictionary", function(){
        var dictionary = new Dictionary;
        var person = new Person;

        spyOn(dictionary, "hello");
        spyOn(dictionary, "world");

        person.sayHelloWorld(dictionary); 

        // not possible withoutsecond spy 
        expect(dictionary.hello).toHaveBeenCalled();

        expect(dictionary.world).toHaveBeenCalled();  
        // not possible withoutsecond spy 

        person.getName11 = jasmine.createSpy("Name spy"); 
        person.getName11();
        expect(person.getName11).toHaveBeenCalled();  
        

    })

})