module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      filename: String,
      path: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Upload = mongoose.model("upload", schema);
  return Upload;
};
