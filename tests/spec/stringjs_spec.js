describe("String format", function(){

  it('should exists format()', function() {
    expect("".format).toBeDefined();
  });
  it('should exists bind()', function() {
    expect("".bind).toBeDefined();
  });

  it("should returns same string", function(){
    expect("Hello World".format()).toEqual("Hello World");
  });

  it("should returns formated string with only one parameter", function(){
    expect("Hello {0}".format("World")).toEqual("Hello World");
  });

  it("should returns formated string with more than one parameter", function(){
    expect("{1} {0}".format("World", "Hello")).toEqual("Hello World");
  });

  it("should returns formated string with more than one parameter with repeater index", function(){
    expect("{1} {0}, this {0} is beautiful!".format("World", "Hello")).toEqual("Hello World, this World is beautiful!");
  });
});

describe("String Bind", function(){
  it("should returns same string", function(){
    expect("Hello World".bind()).toEqual("Hello World");
  });

  it("should returns formated string with only one parameter", function(){
    var data = {data : 'World'};
    expect("Hello {{data}}".bind(data)).toEqual("Hello World");
  });

  it("should returns an array with formated strings", function(){
    var list = [];
    var data = {data : 'World'};
    var data1 = {data : 'JS'};

    list.push(data);
    list.push(data1);

    expect("Hello {{data}}".bind(list)).toEqual(['Hello World', 'Hello JS']);
  });
});

describe("String Repeat", function(){

  it("should returns an array with formated strings", function(){
    var list = [];
    var data = {data : 'World'};
    var data1 = {data : 'JS'};

    list.push(data);
    list.push(data1);

    expect("Hello {{data}}".repeat(list)).toEqual(['Hello World', 'Hello JS']);
  });
});
