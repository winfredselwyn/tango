import { Mongo } from 'meteor/mongo';

export const Buckets = new Mongo.Collection('bucket');

Meteor.methods({
  'buckets.insert': function () {
    return Buckets.insert({
      createdAt: new Date(),
      content: '',
      ownerId: this.userId,
      sharedWith: [],
      toDos: [],
    });
  },
  'buckets.remove': function (bucket) {
    return Buckets.remove(bucket);
  },
  'buckets.update': function (bucket, content) {
    return Buckets.update(bucket._id, { $set: { content } });
  },
  'buckets.share': function (bucket, email) {
    return Buckets.update(bucket._id, { $push: { sharedWith: email } });
  },
});
