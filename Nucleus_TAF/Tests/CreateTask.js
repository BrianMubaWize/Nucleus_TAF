import TasksPage from './../Pages/TasksPage';
import loginPage from './../Pages/LoginPage';

fixture `Create a Task`
    .page `https://todoist.com`;
    
    test ('Test Creation of a task ', async t => {
        await loginPage.login('brianmuba@gmail.com','brian1234');
        await TasksPage.createTask('Test1');
        await t.expect(TasksPage.checkbox.exists).ok();
    });