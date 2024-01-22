import mongoose from "mongoose";

const Connection = async (
  username = "muskanjainsrs09",
  password = "TszvylLETrrCdMKQ"
) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.8hjy2rb.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
