const express = require('express');
const {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require('../controllers/repairController');
const router = express.Router();

//al router se le pasan los endpoints que app ejecutará
router.get('/', getAllRepairs);

router.post('/', createRepair);

router.get('/:id', getRepairById);

router.patch('/:id', updateRepair);

router.delete('/:id', deleteRepair);

module.exports = { repairsRouter: router };
