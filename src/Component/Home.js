import React, { useEffect, useState } from 'react';
import Books from './Books';

const Home = () => {
    const [allbooks, setAllbooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllbooks(data)
            })
    }, [])


    return (
        <div>
            This is home page{allbooks.length}
            {
                allbooks.map(books => <Books book={books} key={books._id} ></Books>)
            }

        </div>
    );
};

export default Home;