import React from 'react';

export const ToDoList = ({ taskList, onDeleteTask }) => {
    return (
        <ul className="list-group">
            {taskList.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{task.label}</span>
                    <button className="btn btn-danger btn-sm" onClick={() => onDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};