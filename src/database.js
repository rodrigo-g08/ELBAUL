const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo-server:27017/elbaul', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conexión a MongoDB exitosa'))
.catch(err => console.error('❌ Error de conexión a MongoDB:', err));
