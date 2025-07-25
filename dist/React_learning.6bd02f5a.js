// const header = React.createElement('h1',{
//     id:'heading', xyz:'abc'
// },'Hello World from React!');
const header = React.createElement('div', {
    id: 'parent'
}, [
    React.createElement('div', {
        id: 'child1'
    }, [
        React.createElement('h1', {}, 'Hello World from React!'),
        React.createElement('h2', {}, 'Hello World from React!')
    ]),
    React.createElement('div', {
        id: 'child2'
    }, [
        React.createElement('h1', {}, 'Hello World from React!'),
        React.createElement('h2', {}, 'Hello World from React!')
    ])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);

//# sourceMappingURL=React_learning.6bd02f5a.js.map
