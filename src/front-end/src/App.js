import { useEffect, useState } from 'react';
import { createTask, deleteTask, findAllTask, updateStatus} from './promises';

function App() {
  const [tasks, setTask] = useState([]);
  const [taskName, setInput] = useState('');

  useEffect(() => {
    async function getTasks() {
      const data = await findAllTask();
      setTask(data);
    };
    getTasks();
  }, [tasks]);

  async function handleStatus(id, status) {
    await updateStatus(id, status);
  };

  return (
    <div>
      <h3>TO DO LIST - EBYTR</h3>
        <nav>
          <input
            type="text"
            placeholder='Digite sua tarefa'
            onChange={(event) => setInput(event.target.value)}          
          >
          </input>
          <button
            type='button'
            onClick={() => createTask(taskName)}
          >
            Criar Tarefa
          </button>
        </nav>
        <section>
            {tasks.map((task, index) => (
              <div key={index}>
                  <li>{task.taskName} - {task.status}</li>
                  <button
                    type="button"
                    onClick={() => deleteTask(task._id)}
                  >
                    Excluir
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStatus(task._id, 'Em Andamento')}
                  >
                    Em Andamento
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStatus(task._id, 'Pronto')}
                  >
                    Pronto
                  </button>
              </div>
            ))}
        </section>
    </div>
  );
}

export default App;
