    const done = tarefas.filter((item) => {
      return item.status === "done"
    })
    const mapTarefas = done.map((item) => {
      return item.titulo
    })
    return mapTarefas