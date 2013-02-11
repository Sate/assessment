describe("startsWith", function(){

  it("should be true when second argument starts with first", function(){
      expect(startsWith('BaSe', 'BaSeketball')).toBe(true);
  })

  it("should be false when second argument does not start with first", function(){
      expect(startsWith('hey!', 'hello')).toBe(false);
  })

  it("should produce an error when arguments aren't strings", function(){
      var result = startsWith('hello', 43110);
      expect(result).toBe(undefined);
  })


});