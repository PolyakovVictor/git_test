import { useState, useEffect, useRef} from "react";
import {Itodo} from '../types/data';
const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<Itodo[]>([]);
    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete: false,
        }])
    };
    return <div>
        <div>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
    </div>
}

export {App}