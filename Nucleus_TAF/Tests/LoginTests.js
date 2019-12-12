import loginPage from './../Pages/LoginPage';

fixture `Login Tests`
    .page `https://todoist.com`;
    
    test ('Test successfull login', async t => {
        await loginPage.login();
    
        await t.expect(loginPage.inputName.exists).NotOk();
    });