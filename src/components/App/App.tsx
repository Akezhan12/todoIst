import React, {useCallback, useEffect, useState} from 'react';
import './App.scss';
import { SearchInput } from '../SearchInput/component';
import { ListItem } from '../ListItem/component';
import { Task } from './types/Task';
import { AddTask } from '../AddTask/component';
import { uuid } from 'uuidv4';

export const App = () => {
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [immutTasks, setImmutTasks] = useState<Array<Task>>([]);

    const onSearch = useCallback((value) => {
        if (value.length > 0) {
            const result = immutTasks.filter(({ title }) => title.toLowerCase().startsWith(value));
            setTasks(result);
        } else {
            setTasks(immutTasks);
        }
    }, [immutTasks, setTasks]);

    const onAddTask = useCallback((title: string) => {
        const result = [...immutTasks];
        result.push({ title, completed: false, id: uuid()});
        setImmutTasks(result);
        setTasks(result);
    }, [immutTasks]);

    const onDeleteTask = useCallback((id) => {
        console.log('hellow')
        const result = immutTasks.filter((task) => id !== task.id)
        setTasks(result);
        setImmutTasks(result);
    },[immutTasks])

  return (
    <div className="App container">
          <SearchInput placeholder="azaaa" onSearch={onSearch} />
      <ListItem tasks={tasks} onDeleteTask={onDeleteTask}  />
      <AddTask onAddTask={onAddTask} />
    </div>
  );
}
