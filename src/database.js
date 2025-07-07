const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_ELBAUL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado a MongoDB en puerto 27017"))
.catch(err => console.error("❌ Error conectando a MongoDB:", err));
