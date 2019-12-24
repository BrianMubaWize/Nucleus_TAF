import TasksPage from '../Pages/TasksPage';
import loginPage from '../Pages/LoginPage';

fixture `Create a Task`
    .page `${process.env.URL}`;
    
    test ('Test Creation of a task ', async t => {
        await loginPage.login(`${process.env.USER_NAME}`,`${process.env.PASSWORD}`);
        await TasksPage.createTask('Test');
    }); 