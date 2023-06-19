import React, { useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Intro from './panels/Intro';


const ROUTES = {
	HOME: 'home',
	INTRO: 'intro',
}

const STORAGE_KEYS = {
	STATUS: 'status'
}

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
	const [fetchedUser, setUser] = useState<UserInfo | undefined>();
	const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			try {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			} catch {
				console.log('Error load user');
				
			}
			
		}
		fetchData();
		setPopout(null);
		
	}, []);

	const go: MouseEventHandler<HTMLElement> = e => {
		setActivePanel(e.currentTarget.dataset.to ?? 'home'); 
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Intro id={ROUTES.INTRO} user={fetchedUser} go={go} />
								<Home id={ROUTES.HOME} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
