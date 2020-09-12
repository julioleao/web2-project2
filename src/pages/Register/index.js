import Axios from "axios";
import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function changeForm(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault();

    const url = "https://reqres.in/api/register";

    Axios.post(url, {
      email: form.email,
      password: form.password,
    })
      .then((res) => {
        console.log(res.data);
        alert("Registrado com sucesso!!");
        window.location.pathname = "/login";
      })
      .catch(() => {
        alert("Verifique os campos digitados!");
      });

    console.log(form);

    setForm({ email: "", password: "" });
  }

  return (
    <form
      noValidate
      onSubmit={submitForm}
      style={{
        width: 350,
        margin: "40px auto",
      }}
    >
      <h2 className="text-center">Registrar</h2>
      <div className="form-group">
        <input
          placeholder="E-mail"
          onChange={changeForm}
          name="email"
          className="form-control"
          value={form.email}
          required
        />
        <div className="invalid-feedback">Email inválido</div>
      </div>

      <div className="form-group">
        <input
          placeholder="Senha"
          onChange={changeForm}
          name="password"
          className="form-control"
          type="password"
          value={form.password}
        />
      </div>

      <div className="form-group">
        <button className="btn btn-primary btn-block">Registrar-se</button>
      </div>
    </form>
  );
}
