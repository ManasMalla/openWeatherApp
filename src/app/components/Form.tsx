import React, { useState } from 'react';

// Define a type or interface for the props
interface TaskFormProps {
  addTask: (task: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>(''); // Specify the type for 'task' as 'string'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Use React.FormEvent<HTMLFormElement> for the event type
    e.preventDefault();
    if (task.trim() === '') return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="">
        <div className='flex flex-col justify-center items-center h-[40vh]'>
        <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        className="dark:bg-white dark:text-black py-3 pl-4 pr-28 rounded-lg border border-gray-300"
        />
      <button type="submit" className="text-xl md:text-2xl my-6 py-2 px-12  hover:bg-teal-600 bg-teal-500 text-white rounded-md">
        Add
      </button>
      </div>
    </form>
  );
};

export default TaskForm;