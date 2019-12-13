import { Selector, t } from 'testcafe';

const addTask = Selector('.agenda_add_task');

class TaskPage
{
    constructor()
    {
        this.addTask            = addTask.child();
        this.addFieldBox        = Selector('.DraftEditor-root');
        this.addField           = this.addFieldBox.child();
        this.beforeTaskButton   = Selector ('.item_actions');
        this.addTaskButton      = this.beforeTaskButton.child();
        this.checkbox           = Selector ('.ist_checkbox');
		
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