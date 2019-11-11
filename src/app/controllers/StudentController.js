import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const studentExist = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExist) {
      res.status(401).json({ error: 'Student has exists' });
    }

    const { nome, email, idade, peso, altura } = await Student.create(req.body);

    return res.json({ student: { nome, email, idade, peso, altura } });
  }
}

export default new StudentController();
