const registrarPacienteForm1 = async (req, res) => {
    const {numero_documento} = req.body;
    const paciente = new PacienteModel(req.body);
    paciente.usuario = req.usuario._id;

    const existePaciente = await PacienteModel.findOne({ numero_documento });

    if (existePaciente) {
        const error = new Error("El paciente ya existe");
        return res.status(400).json({ msg: error.message });
    }

    try {
        const pacienteGuardado = await paciente.save();
        res.status(200).json(pacienteGuardado);
    } catch (error) {
        console.log(error);
    }
};