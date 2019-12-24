import { Selector, t } from 'testcafe';

const addTask = Selector('#quick_add_task_holder');

class TaskPage
{
    constructor()
    {
        this.addTask            = addTask;
        this.addFieldBox        = Selector ('.DraftEditor-editorContainer>div>div>div>div');
        this.addTaskButton      = Selector ('.item_editor_actions>button');
        this.checkbox           = Selector ('.ist_checkbox');
        this.cancelButton       = this.addTaskButton.nextSibling;
        this.tasksFound         = 0;
    }

    async createTask (taskName)
    {
        this.clickAddTask();
        this.setTaskName(taskName);
        this.clickAddTaskButton();
    }

    async clickAddTask()
    {
        await t.click(this.addTask);
    }

    async setTaskName(taskName)
	{
		await t.typeText(this.addFieldBox, taskName);
    }

    async clickAddTaskButton()
    {
        await t.click (this.addTaskButton);
        await t.click (this.cancelButton);

    }

    async createMultipleTasks(taskNum)
    {
        for(let i=0; i < taskNum; i++)
        {
            var Tasktext = Selector('.task_item_content_text').withText('Test' + i);
            //await t.debug();
            this.createTask('Test' +  i);
             if (Tasktext.exists){
                this.tasksFound++;
            }
        }
    }

    
    
    
}

export default new TaskPage;