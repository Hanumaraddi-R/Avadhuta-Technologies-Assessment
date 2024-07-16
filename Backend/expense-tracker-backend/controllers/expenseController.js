const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
    const { date, amount, category, description } = req.body;
    try {
        const newExpense = new Expense({
            userId: req.user.id,
            date,
            amount,
            category,
            description
        });
        const expense = await newExpense.save();
        res.json(expense);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user.id });
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateExpense = async (req, res) => {
    const { date, amount, category, description } = req.body;
    try {
        let expense = await Expense.findById(req.params.id);
        if (!expense) return res.status(404).json({ message: 'Expense not found' });

        if (expense.userId.toString() !== req.user.id)
            return res.status(401).json({ message: 'User not authorized' });

        expense = await Expense.findByIdAndUpdate(req.params.id, { date, amount, category, description }, { new: true });
        res.json(expense);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        let expense = await Expense.findById(req.params.id);
        if (!expense) return res.status(404).json({ message: 'Expense not found' });

        if (expense.userId.toString() !== req.user.id)
            return res.status(401).json({ message: 'User not authorized' });

        await Expense.findByIdAndRemove(req.params.id);
        res.json({ message: 'Expense removed' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
