import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Search = () => {
    const [location, setLocation] = useState('');
    const [guest, setGuest] = useState('');
    const [category, setCategory] = useState('');

    const router = useRouter();
    const submitHandler = (e) => {
        e.preventDefault();

        if(location.trim()) {
            router.push(`/?location=${location}&guests=${guest}&category=${category}`)
        } else {
            router.push('/')
        }
    }
  return (
    <div className="container container-fluid">
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submitHandler}>
          <h2 className="mb-3">Search Rooms</h2>
          <div className="form-group">
            <label htmlFor="location_field">Location</label>
            <input
              type="text"
              className="form-control"
              id="location_field"
              placeholder="new york"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
              <div className="guest-field">
                  No. of Guests
              </div>
              <select 
              className="form-control"
              id="guest_field" 
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              >
                {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>
                        {num  }
                    </option>
                ))}

              </select>
          </div>

          <div className="form-group">
              <div className="room_type_field">
                  Room Type
              </div>
              <select 
              className="form-control"
              id="room_type_field"
              value={category}
              onChange={(e) => setCategory(e.target.value)} 
              >
                  {['King', 'Single', 'Twins'].map((d) => (
                      <option key={d} value={d}>{d}</option>
                  ))}
              </select>
          </div>

          <button type="submit" className="btn btn-block py-2">Search</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Search;