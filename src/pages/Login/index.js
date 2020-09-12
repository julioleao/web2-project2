import Axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function changeForm(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault();

    const url = "https://reqres.in/api/login";

    Axios.post(url, {
      email: form.email,
      password: form.password,
    }).then((res) => {
      console.log(res.data);
      alert("Login efetuado com sucesso!!");
      localStorage.setItem("token", res.data.token);
      window.location.pathname = "/list";
    }).catch(() =>{
      alert("Usuário ou senha Inválidos");
    });

    console.log(form);

    setForm({ email: "", password: "" });
  }

  return (
    <div>
      <form
        noValidate
        onSubmit={submitForm}
        style={{
          width: 350,
          margin: "40px auto",
        }}
      >
        <h2 className="text-center">Login</h2>
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
          <label>eve.holt@reqres.in</label>
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
          <label>cityslicka</label>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-block">Entrar</button>
        </div>
      </form>
    </div>
  );
}
