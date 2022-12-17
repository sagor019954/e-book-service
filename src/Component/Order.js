import React, { useState } from 'react';

const Order = () => {

    const [userbook, setUserbok] = useState({})


    const handlesubmit = (e) => {
        e.preventDefault()
        let name = e.target.name.value;
        let number = e.target.number.value;
        const book = {
            name: name,
            pages: number,
        }
        fetch('http://localhost:5000/books', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setUserbok(book)
        e.target.reset()

    }
    console.log(userbook);
    return (
        <form onSubmit={handlesubmit} className=' w-1/2 mt-10 mx-auto '>
            <input name='name' type="text" placeholder="Book " className="input mb-10 w-1/2 bg-gray-400" /> <br />
            <input name='number' type="number" placeholder="pages" className="input mb-10 w-1/2 bg-gray-400" /><br></br>
            <button className="btn btn-active btn-accent">Button</button>
        </form>
    );
};

export default Order;