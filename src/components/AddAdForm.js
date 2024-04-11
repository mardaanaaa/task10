import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAd } from '../actions/adActions.js';

const AddAdForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAd({ title, content }));
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <h2>Добавить объявление</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Содержание" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default AddAdForm;
