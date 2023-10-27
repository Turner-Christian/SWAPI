import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => {
    const {userSelect, setUserSelect, id, setId} = props;
    const {idOOR, setIdOOR} = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        // navigates to result page
        navigate(`/${userSelect}/${id}`);
    }

    return (
        <div>
            {
                id < 0?
                    <h2 className='text-white bg-danger p-2'>ID Cannot be Negative</h2>
                    :null
            }
            <form
                className='d-flex justify-content-center align-items-center flex-wrap'
                onSubmit={handleSubmit}>
                <strong>Search for: </strong>
                <select name="search_options"
                    className='form-control text-center'
                    onChange={(e) => setUserSelect(e.target.value)}
                >
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                    <option value="films">Films</option>
                </select>
                <div className='d-flex justify-content-evenly align-items-center mt-3'>
                    <div className='d-flex align-items-center'>
                        <label htmlFor="id" className='mx-3'>ID:</label>
                        <input
                            required
                            type="number"
                            name='id'
                            className='form-control w-25'
                            onChange={(e) => setId(e.target.value)
                            
                            }
                        />
                    </div>
                    <div>
                        <button className='btn bg-info'><strong>Search</strong></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;