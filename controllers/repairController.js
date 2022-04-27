const { Repair } = require('../models/repairModel');

const getAllRepairs = async (req, res) => {
  const repairs = await Repair.findAll();
  res.status(200).json({
    repairs,
  });
};

const createRepair = async (req, res) => {
  // date: date, userId:userId
  const { date, userId } = req.body;

  const newRepair = await Repair.create({ date, userId });

  res.status(201).json({ newRepair });
};

const getRepairById = async (req, res) => {
  try {
    const { id } = req.params; //es la forma que en guardamos la ruta dinámica del router
    const repair = await Repair.findOne({ where: { id } }); //esto es lo que viene de la ruta dinámica del router (id:id)

    if (!repair || repair.status !== 'pending') {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found',
      });
    }

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const repair = await Repair.findOne({ where: { id } });

    if (!repair || repair.status !== 'pending') {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found',
      });
    }

    await repair.update({ status });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const repair = await Repair.findOne({ where: { id } });

    if (!repair || repair.status !== 'pending') {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found',
      });
    }

    await repair.update({ status: 'cancelled' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
};
