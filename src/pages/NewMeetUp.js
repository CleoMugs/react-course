import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';


function NewMeetupPage() {
	const navigate = useNavigate();

	function addMeetupHandler(meetupData) {
		let url = 'https://react-getting-started-90b1b-default-rtdb.firebaseio.com/meetups.json';

		fetch(
			url,
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json'
				},
			}
	
		).then(() => {
			navigate('/');
		});
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
}

export default NewMeetupPage;