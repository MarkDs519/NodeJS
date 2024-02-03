import { 
	Card, 
	CardActionArea, 
	CardContent, 
	CardMedia, 
} from "@mui/material"; 
import * as React from "react"; 

const ServicesCard = () => { 
	return ( 
		<center> 
			<div> 
				<h1 style={{ color: "green" }}>GeeksforGeeks</h1> 
				<h2>React MUI CardActionArea API</h2> 
			</div> 
			<div style={{ width: "50%" }}> 
				<Card sx={{ maxWidth: 345 }}> 
					<CardActionArea> 
						<CardMedia 
							component="img"
							height="180"
							image= 
"https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png"
							alt="gfg"
						/> 
						<CardContent> 
							<h1>GeeksforGeeks</h1> 
							<p style={{ fontSize: 18 }}>Welcome to the geeks world!</p> 
						</CardContent> 
					</CardActionArea> 
				</Card> 
			</div> 
		</center> 
	); 
} 

export default ServicesCard; 
