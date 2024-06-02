import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import About from './pages/About';
import NavBar from './pages/NavBar';
import Projects from './pages/Projects';


class App extends Component {

    render() {
        return (
            <>
                <Router>
                    <NavBar />
                    <div className='min-h-screen'>
                        <Routes>
                            <Route path="/"
                                element={ <> <Home /> </>}
                            />
                            <Route path="/about"
                                element={ <About /> }
                            />
                            <Route path="/projects"
                                element={ <Projects /> }
                            />
                            <Route path="*"
                                element={
                                    <h1 className='text-center text-4xl text-red-500 mt-20'>
                                        404 Not Found
                                    </h1>
                                }
                            />
                        </Routes>
                    </div>
                </Router>
            </>
        )
    }
}

export default App;
