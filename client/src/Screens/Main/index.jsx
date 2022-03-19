import { Button, Flex } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from '../../Components/Navbar/Navbar';
import './styles.module.css';
const Main = () => {
	// let navigate = useNavigate();
	// const user = localStorage.getItem('token');
	// const handleLogout = () => {
	// 	localStorage.removeItem('token');
	// 	window.location.reload();
	// };

	return (
		<>
			<Navbar />
			<Flex justifyContent='center'>
				<Link to='/home'>
					<Button margin={3} colorScheme='blue'>
						Button
					</Button>
				</Link>
			</Flex>
		</>

		// <Flex width='100%'>
		// 	<VStack width='100%'>
		// 		<HStack width='100%'>
		// 			<nav className={styles.navbar}>
		// 				<h1 style={{ color: 'black' }}>SAY CHEESE!</h1>
		// 				<div>
		// 					{user ? (
		// 						<button
		// 							className={styles.white_btn}
		// 							onClick={handleLogout}
		// 						>
		// 							Logout
		// 						</button>
		// 					) : (
		// 						<button
		// 							className={styles.white_btn}
		// 							onClick={() => {
		// 								navigate('/login');
		// 							}}
		// 						>
		// 							Login
		// 						</button>
		// 					)}
		// 				</div>
		// 			</nav>
		// 		</HStack>
		// 	</VStack>
		// </Flex>
	);
};

export default Main;
