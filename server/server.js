Meteor.publish("whatifs", function () {
    return Whatifs.find();
  });