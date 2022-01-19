import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";



export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { selectedActivity, closeForm, createActivity, updateActivity, loading } = activityStore;
    const initialState = selectedActivity ?? {
        id: '',
        category: '',
        city: '',
        date: '',
        description: '',
        title: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        //Деконструкция значений name и value из таргет Input элемента
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} onChange={handleInputChange} name='title' />
                <Form.TextArea placeholder='Description' value={activity.description} onChange={handleInputChange} name='description' />
                <Form.Input placeholder='Category' value={activity.category} onChange={handleInputChange} name='category' />
                <Form.Input type='date' placeholder='Date' value={activity.date} onChange={handleInputChange} name='date' />
                <Form.Input placeholder='City' value={activity.city} onChange={handleInputChange} name='city' />
                <Form.Input placeholder='Venue' value={activity.venue} onChange={handleInputChange} name='venue' />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
});