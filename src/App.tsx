import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import About from './pages/About';
import NavBar from './pages/NavBar';
import CircularFloatingElement from './pages/test';


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
                            <Route path="*"
                                element={ <CircularFloatingElement numElements={5} rotationSpeed={0.2} /> }
                            />
                        </Routes>
                    </div>
                </Router>
            </>
        )
    }
}

export default App;
