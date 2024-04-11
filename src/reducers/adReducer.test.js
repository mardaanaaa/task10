import adReducer from './adReducer';

test('adds an ad to the state', () => {
    const initialState = {
        ads: [],
    };
    const action = {
        type: 'ADD_AD',
        payload: { id: 1, title: 'Test Ad', content: 'This is a test ad.' },
    };
    const newState = adReducer(initialState, action);
    expect(newState.ads.length).toBe(1);
    expect(newState.ads[0].title).toBe('Test Ad');
});

// Add more tests for other cases (deleting, editing) if needed
