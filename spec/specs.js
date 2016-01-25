describe('placesTravelledTo', function() {
  it("will create a new location with the given properties", function() {
    var testLocation = new Location("Portland", "Oregon", "USA");
    expect(testLocation.city).to.equal("Portland");
    expect(testLocation.state).to.equal("Oregon");
    expect(testLocation.country).to.equal("USA");
    expect(testLocation.landmarks).to.eql([]);
  });
});
