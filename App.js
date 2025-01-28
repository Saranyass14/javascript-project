const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, 'H1 Hello World'),
        React.createElement('h2', {}, 'H2 Hello World')
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, 'H1 Hello World'),
        React.createElement('h2', {}, 'H2 Hello World')
    ])
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
