import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './src/createEmotionCache';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBarComponent from '../components/head/appBar';
import DrawerComponent from '../components/head/drawer';
import DrawerHeadComponent from '../components/head/drawerHead';

const clientSideEmotionCache = createEmotionCache();
const drawerWidth = 240;

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport"
				content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box sx={{ display: 'flex' }}>
					<CssBaseline />
					<AppBarComponent handleDrawerOpen={handleDrawerOpen} open={open} drawerWidth={drawerWidth} />
					<DrawerComponent handleDrawerClose={handleDrawerClose} open={open} drawerWidth={drawerWidth} />
					<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
						<DrawerHeadComponent />
						<Component {...pageProps} />
					</Box>
				</Box>
			</ThemeProvider>
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
