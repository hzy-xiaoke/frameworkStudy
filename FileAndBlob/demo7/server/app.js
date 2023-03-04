const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send({
    code: 200,
    ok: true,
    msg: '上传成功'
  });
});

app.listen(8888, () => {
  console.log('Server running in: http://localhost:8888');
});