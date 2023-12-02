import React from "react";
import { useform } from "./hooks/useform";

const initiaForm = {};

const validationsForm = (form) => {};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useform(initiaForm, validationsForm);

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        <br />
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        <br />
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;
