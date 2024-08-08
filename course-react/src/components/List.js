const List = () => {

    const items = [{
        id: 1,
        name: "Mariana"
    }, {
        id: 2,
        name: "Mateus"
    }, {
        id: 3,
        name: "Regina"
    }]

    return <div>
        {items.map((item) => (
            <p key={item.id}>
                {item.id} - {item.name}
            </p>
        ))}
    </div>
};

export default List;