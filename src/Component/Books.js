import React, { useState } from 'react';

const Books = ({ book }) => {
    // const { name, pages, _id } = book

    const [displaybook, setDisplaybook] = useState([book])
    console.log(displaybook);
    const handledelet = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/books/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.deletedCount > 0) {
                    alert('are you sure')
                    console.log(book);
                    console.log(displaybook);
                    const allbook = displaybook.filter(book => book._id !== book.id)

                    // const remainingbook = displaybook.filter(singlebook => singlebook._id !== id)
                    setDisplaybook(allbook)

                }

            })

    }
    return (
        <div>
            <div className="card mt-5 w-96 bg-base-300 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button onClick={() => handledelet(displaybook._id)} className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <p>{displaybook.name}</p>
                    <p>{displaybook.pages}</p>
                </div>
            </div>
        </div>
    );
};

export default Books;