function App(){
    const content = "Comments"
    const arr = [
        {id: 1, text:"Comment 1"},
        {id: 2, text:"Comment 2"},
        {id: 3, text:"Comment 3"},
    ]
    return <div>
        <h1>{content}</h1>
        {arr.map((comment,index) => (
            <li key={index}>{comment.text}</li>
        ))}
    </div>
}

export default App