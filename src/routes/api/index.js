const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const result = {
    status: 200,
    message: '기본 구조 구축 성공',
  };
  res.status(200).send(result);
});

module.exports = router;
