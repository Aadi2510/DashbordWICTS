const mongoose = require('mongoose');

// Function to pluralize a word
function pluralize(word) {
  const irregularPlurals = {
    // Define any irregular plurals here if needed
  };
  if (irregularPlurals[word]) {
    return irregularPlurals[word];
  }
  const rules = [
    [/s$/, 'ses'],
    [/([^aeiou])y$/, '$1ies'],
    [/$/, 's']
  ];
  for (let [pattern, replacement] of rules) {
    if (pattern.test(word)) {
      return word.replace(pattern, replacement);
    }
  }
  return word;
}


exports.saveCartData = async (req, res) => {
  const username = req.params.username;
  const collectionName = pluralize(username); 
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    const collection = mongoose.connection.collection(collectionName);
    const newDocument = {
      catagory: req.body.catagory,
      productBrand: req.body.productBrand,
      productType: req.body.productType,
      productRating: req.body.productRating,
      productPrice: req.body.productPrice,
      image: req.body.image
    };
    await collection.insertOne(newDocument);
    res.send('Document saved');
  } catch (error) {
    console.error('Error saving document:', error);
    res.status(500).send('Error saving document');
  } finally {
    delete mongoose.connection.models[collectionName];
  }
};


exports.getCartData = async (req, res) => {
  const username = req.params.username;
  const collectionName = pluralize(username); 
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    const Model = mongoose.model(collectionName, new mongoose.Schema({}), collectionName);
    const result = await Model.find({});
    res.json(result);
  } catch (error) {
    console.error('Error performing find operation:', error);
    res.status(500).send('Error performing find operation');
  } finally {
    delete mongoose.connection.models[collectionName];
  }
};


exports.deleteCartData = async (req, res) => {
  const username = req.params.username;
  const id = req.params.id;
  const collectionName = pluralize(username); 
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    const Model = mongoose.model(collectionName, new mongoose.Schema({}), collectionName);
    const result = await Model.findByIdAndDelete({_id: id});
    res.send('Deleted');
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).send('Error deleting document');
  } finally {
    delete mongoose.connection.models[collectionName];
    mongoose.connection.close();
  }
};
