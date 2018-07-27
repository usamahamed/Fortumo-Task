
if ( typeof window === 'undefined' ) {
  require('../../node_modules/jquery/dist/jquery');
  require('../../app/index');
  var expect = require('chai').expect;
}





 describe("Test Mock ajax call firstly", function() {
  it("should mock a jQuery ajax request", sinon.test(function () {
    this.mock(jQuery).expects("ajax").once();

    jQuery.ajax({
      url: "https://res.cloudinary.com/itgov/raw/upload/v1532636985/first-service.json"
    });
  }));

});


describe("Test First service API call", function() {
  var server;

  beforeEach(function() {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it("should call Web SDK service correctly", function () {
    server.respondWith("GET", "https://res.cloudinary.com/itgov/raw/upload/v1532636985/first-service.json",
                       [200, { "Content-Type": "application/json" },
                        '{ "activity": "xhr", "activity_url": "https://res.cloudinary.com/itgov/raw/upload/v1532636962/second-service.json" }']);

    var callbacks = [sinon.spy(), sinon.spy()];



    jQuery.ajax({
      url: "https://res.cloudinary.com/itgov/raw/upload/v1532636985/first-service.json",
      success: callbacks[0]
    });
    jQuery.ajax({
      url: "https://res.cloudinary.com/itgov/raw/upload/v1532631793/wrong-service.json",
      success: callbacks[1]
    });

    //console log for ensure ajax response test
    console.log(server.requests); // Logs all requests so far
    server.respond(); // Process all requests so far
    expect(callbacks[0].calledOnce).to.be.equal(true);


    expect(callbacks[1].calledOnce).to.be.equal(false); // Unknown URL /other received 404
  });
});




describe("Test Second service API call", function() {
  var server;

  beforeEach(function() {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it("should call Android SDK service correctly", function () {
    server.respondWith("GET", "https://res.cloudinary.com/itgov/raw/upload/v1532636962/second-service.json",
                       [200, { "Content-Type": "application/json" },
                        '{ "activity": "xhr", "activity_url": "https://res.cloudinary.com/itgov/raw/upload/v1532636927/third-service.json" }']);

    var callbacks = [sinon.spy(), sinon.spy()];



    jQuery.ajax({
      url: "https://res.cloudinary.com/itgov/raw/upload/v1532636962/second-service.json",
      success: callbacks[0]
    });
    jQuery.ajax({
      url: "https://res.cloudinary.com/itgov/raw/upload/v1532631793/wrong-service.json",
      success: callbacks[1]
    });

    //console log for ensure ajax response test
    console.log(server.requests); // Logs all requests so far
    server.respond(); // Process all requests so far
    expect(callbacks[0].calledOnce).to.be.equal(true);


    expect(callbacks[1].calledOnce).to.be.equal(false); // Unknown URL /other received 404
  });
});


describe("Test Third service API call", function() {
  var server;

  beforeEach(function() {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it("should call PSMS API service correctly", function () {
    server.respondWith("GET", "https://res.cloudinary.com/itgov/raw/upload/v1532636927/third-service.json",
                       [200, { "Content-Type": "application/json" },
                        '{ "activity": "xhr", "activity_url": "https://res.cloudinary.com/itgov/raw/upload/v1532631793/fourth-service.json" }']);

    var callbacks = [sinon.spy(), sinon.spy()];



    jQuery.ajax({
      url: "https://res.cloudinary.com/itgov/raw/upload/v1532636927/third-service.json",
      success: callbacks[0]
    });
    jQuery.ajax({
      url: "https://res.cloudinary.com/itgov/raw/upload/v1532631793/wrong-service.json",
      success: callbacks[1]
    });

    //console log for ensure ajax response test
    console.log(server.requests); // Logs all requests so far
    server.respond(); // Process all requests so far
    expect(callbacks[0].calledOnce).to.be.equal(true);


    expect(callbacks[1].calledOnce).to.be.equal(false); // Unknown URL /other received 404
  });
});



describe("Test Last service API call", function() {
  var server;

  beforeEach(function() {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it("should call Windows 8 service correctly", function () {
    server.respondWith("GET", "https://res.cloudinary.com/itgov/raw/upload/v1532631793/fourth-service.json",
                       [200, { "Content-Type": "application/json" },
                        '{ "activity": "redirect", "activity_url": "dashboard.html" }']);

    var callbacks = [sinon.spy(), sinon.spy()];



    jQuery.ajax({
      url: "https://res.cloudinary.com/itgov/raw/upload/v1532631793/fourth-service.json",
      success: callbacks[0]
    });
    jQuery.ajax({
      url: "https://res.cloudinary.com/itgov/raw/upload/v1532631793/wrong-service.json",
      success: callbacks[1]
    });

    //console log for ensure ajax response test
    console.log(server.requests); // Logs all requests so far
    server.respond(); // Process all requests so far
    expect(callbacks[0].calledOnce).to.be.equal(true);


    expect(callbacks[1].calledOnce).to.be.equal(false); // Unknown URL /other received 404
  });
});









