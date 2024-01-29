module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      place: String,
      course: String,
      phone:Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
