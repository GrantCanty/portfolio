import {Route, Routes} from 'react-router-dom';
import './styles/App.css'
import Home from './pages/home'

function App() {

	return (
		<>
			<Routes>
			<Route path='/' element={<Home />}>

			</Route>
			</Routes>
		</>
	)
}

export default App
