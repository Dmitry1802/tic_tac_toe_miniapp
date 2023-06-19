import React, { MouseEventHandler } from 'react';

import { Avatar, Button, Div, Panel, PanelHeader } from '@vkontakte/vkui';

import './Intro.css';
import { UserInfo } from '@vkontakte/vk-bridge/dist/types/src/types/data';

interface Props {
	id: string;
	user?: UserInfo;
	go: MouseEventHandler<HTMLElement>;
}

const Intro: React.FC<Props> = ({id, user, go}) => (
	<Panel id={id} centered={true}>
		<PanelHeader>
			Крестики-Нолики
		</PanelHeader>
		<Div className='intro-page'>
			<Div className='user'>
			{ user  && <Avatar src={user.photo_200}/>}
			<h2>Привет, {user?.first_name ?? 'Пользователь'} </h2>
			
		</Div>
		<Div>Добро пожаловать в крестики-нолики</Div>
		<Div>Приготовьтесь к захватывающему геймплею!</Div>
		<Button className='start-button' onClick={go} data-go='home'>Играть!</Button>
	
		</Div>
	</Panel>
);

export default Intro;
