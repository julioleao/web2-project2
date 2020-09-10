import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function changeForm(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault();

    console.log(form);

    setForm({ email: '', password: ''});
  }

  return (
    <form
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
        />
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
        <button className="btn btn-primary btn-block">Entrar</button>
      </div>
    </form>
  );
}
