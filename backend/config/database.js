const databaseLogin = "test";
const databasePassword = "testtest1";
//Connect to database

exports.connectToDatabase = (mongoose) => {
  mongoose.connect(
    `mongodb://${databaseLogin}:${databasePassword}@ds113442.mlab.com:13442/node-blog`
  );
};
exports.checkCreditionals = (login, password)=>{
  if(login === databaseLogin && password === databasePassword){
    return true;
  }return false;
}
