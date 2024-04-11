import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAd, editAd } from '../actions/adActions.js';
import '../App.css';

const Ad = ({ id, title: initialTitle, content: initialContent }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteAd(id));
    };

    const handleEdit = () => {
        dispatch(editAd(id, { id, title, content }));
        setIsEditing(false);
    };

    return (
        <div className="edit-form">
            {isEditing ? (
                <div>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                    <button onClick={handleEdit}>Сохранить</button>
                </div>
            ) : (
                <div>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <button onClick={() => setIsEditing(true)}>Редактировать</button>
                    <button onClick={handleDelete}>Удалить</button>
                </div>
            )}
        </div>
    );
};

export default Ad;

