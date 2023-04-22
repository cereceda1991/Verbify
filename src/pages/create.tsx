import React from "react";
import Layout from "@/components/Layout";
import NewModule from "@/components/NewModule";
import NewClass from "@/components/NewClass";

function create() {
  return (
    <Layout
      title="Creá cursos, módulos o clases!"
      description="En esta sección podrás crear, modificar o eliminar cursos en tu plataforma"
    >
      <NewModule />
      <NewClass />
    </Layout>
  );
}

export default create;
