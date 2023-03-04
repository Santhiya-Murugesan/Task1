import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Home.css'
function Home(){
    return(
        <>
        
          <div>
            <div className='homebg'>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                       <li class="nav-item">
                          <a class="nav-link" href="#">Find Candidates</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Find jobs</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Find Companies</a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link" href="#">Login</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Register</a>
                      </li>
                      </ul>
                    </div>
                </div>
              </nav>
              <div className='text-center'>
                <p className='hometext'>Find the cnadidates as per your requirements</p>
                <div>
                <input type='text' name='title' id='title' placeholder='Job Title/Keyword'/>
                <input type='text' name='city' id='city' placeholder='Add Country/City'/>
                <input type='button' value='Search' id='search'/>
                </div>
              </div>
            </div>
          </div>

        </>
    );
}
export default Home;