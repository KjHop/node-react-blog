const databaseLogin = "test";
const databasePassword = "testtest1";
//Connect to database

export const connectToDatabase = () => {
  mongoose.connect(
    `mongodb://${databaseLogin}:${databasePassword}@ds113442.mlab.com:13442/node-blog`
  );
};
