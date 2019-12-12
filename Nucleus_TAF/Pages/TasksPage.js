import { Selector, t } from 'testcafe';

const addTask = Selector('.agenda_add_task');

class TaskPage
{
    constructor()
    {
        this.addTask  = addTask.child();
        this.addField = Selector('.DraftEditor-root'.child);
        this.addTaskButton = Selector ('.item_actions'.child);
        this.checkbox = Selector ('.ist_checkbox');
		
    }

    async createTask (taskname)
    {
        this.clickAddTask();
        this.setTaskName(taskname);
        this.clickAddTaskButton();

    }

    async clickAddTask()
    {
        await t.click(this.addTask);
    }

    async setTaskName(taskname)
	{
		await t.typeText(this.addField, taskname);
    }

    async addTaskButton()
    {
        await t.click(this.addTaskButton);
    }

    
    
    
}

export default new TaskPage;