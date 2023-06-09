import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@simplecrud-nodejs-ejs.88z2imj.mongodb.net/database?retryWrites=true&w=majority`);
    console.log('Conexão bem-sucedida ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};

export default connectToDatabase;




