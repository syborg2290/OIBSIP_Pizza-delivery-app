import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminScreen() {
	return (
		<>
			<Text textAlign='center' m={5} fontSize='3xl' fontWeight='bold'>
				Admin Panel
			</Text>
			<Box width='75%' margin='auto'>
				<VStack>
					<HStack
						width='100%'
						spacing={5}
						backgroundColor='#b33030'
						justifyContent='center'
						color='white'
						padding={4}
						fontSize='20px'
						fontWeight='semibold'
						m={5}
					>
						<Link to='/admin/userslist'>
							<Text
								color='white'
								fontSize='1xl'
								fontWeight='semibold'
							>
								Users List
							</Text>
						</Link>
						<Link to='/admin/pizzaslist'>
							<Text
								color='white'
								fontSize='1xl'
								fontWeight='semibold'
							>
								Pizzas List
							</Text>
						</Link>
						<Link to='/admin/addpizzas'>
							<Text
								color='white'
								fontSize='1xl'
								fontWeight='semibold'
							>
								Add new pizzas
							</Text>
						</Link>
						<Link to='/admin/orderslist'>
							<Text
								color='white'
								fontSize='1xl'
								fontWeight='semibold'
							>
								Orders list
							</Text>
						</Link>
						<Link to='/admin/baseslist'>
							<Text
								color='white'
								fontSize='1xl'
								fontWeight='semibold'
							>
								Bases
							</Text>
						</Link>
					</HStack>
				</VStack>
			</Box>
		</>
	);
}
