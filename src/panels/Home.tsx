import React, { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import Game from '../components/Game';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
// import { UserInfo } from '@vkontakte/vk-bridge';

interface Props {
	id: string;
}

const Home: React.FC<Props> = ({ id }) => (
	<Panel id={id}>
		<PanelHeader>Крестики-Нолики</PanelHeader>
			<Game/>
	</Panel>
);

export default Home;
